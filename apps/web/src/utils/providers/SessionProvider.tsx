import { useRouter } from "next/navigation";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchApi } from "../api";
import { userValidator, UserValidator } from "@jua/validators/user";

type SessionOptions = {
  required: boolean;
};

type SessionStatus = "authenticated" | "unathenticated";

type Session = {
  user: UserValidator;
  status: SessionStatus;
  signIn: SessionContextProps["signIn"];
  signOut: SessionContextProps["signOut"];
};

type SignInParams = {
  email: string;
  password: string;
};

interface SessionContextProps {
  user: UserValidator;
  status: SessionStatus;
  signIn(params: SignInParams): Promise<void>;
  signOut(): void;
}

const SessionContext = createContext<SessionContextProps>(
  {} as SessionContextProps,
);

type SessionProvider = {
  children: ReactNode;
};

export default function SessionProvider({ children }: SessionProvider) {
  const [status, setStatus] = useState<SessionStatus>("unathenticated");
  const [user, setUser] = useState<UserValidator>({} as UserValidator);

  const router = useRouter();

  useEffect(() => {
    async function validate() {
      const [data, error] = await fetchApi("user/current-user", {
        method: "GET",
        validator: userValidator,
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data) {
        setStatus("authenticated");

        setUser(data);

        return;
      }

      router.replace("/entrar");
    }

    void validate();
  }, []);

  async function signIn({ email, password }: SignInParams) {
    const [data, error] = await fetchApi("authentication/login", {
      method: "POST",
      body: { email, password },
      validator: userValidator,
    });

    if (error) {
      throw new Error(error.message ?? "");
    }

    setUser(data);

    setStatus("authenticated");

    router.replace("/painel");
  }

  async function signOut() {
    await fetchApi("authentication/logout");

    setStatus("unathenticated");

    router.replace("/entrar");
  }

  return (
    <SessionContext.Provider value={{ status, user, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
}

export function UseSession(options?: SessionOptions): Session {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error(
      "useSession must be inside SessionProvider, verify if SessionProvider is setted on initial settings",
      {
        cause: "SessionProvider not been settled",
      },
    );
  }

  return context;
}
