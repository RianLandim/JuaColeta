import { redirect, useRouter } from "next/navigation";
import { ReactNode, createContext, useContext, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { fetchApi } from "../api";
import { z } from "zod";

type User = {
  id: string;
  email: string;
  name: string;
  cellphone: string;
  license?: string | null;
  role: string;
  createdAt: Date;
};

type SessionOptions = {
  required: boolean;
};

type SessionStatus = "authenticated" | "unathenticated";

type Session = {
  user: User;
  status: SessionStatus;
  signIn: SessionContextProps["signIn"];
  signOut: SessionContextProps["signOut"];
};

type SignInParams = {
  email: string;
  password: string;
};

interface SessionContextProps {
  user: User;
  status: SessionStatus;
  signIn(params: SignInParams): Promise<void>;
  signOut(): void;
}

const SessionContext = createContext<SessionContextProps>(
  {} as SessionContextProps
);

const userValidator = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  cellphone: z.string(),
  license: z.string().nullish(),
  role: z.string(),
  createdAt: z.coerce.date(),
  token: z.string(),
});

type SessionProvider = {
  children: ReactNode;
};

export default function SessionProvider({ children }: SessionProvider) {
  const [status, setStatus] = useState<SessionStatus>("unathenticated");
  const [user, setUser] = useState<User>({} as User);

  const router = useRouter();

  async function signIn({ email, password }: SignInParams) {
    const [data, error] = await fetchApi("authentication/login", {
      method: "POST",
      body: { email, password },
      validator: userValidator,
    });

    if (error) {
      throw new Error(error.message ?? "");
    }

    const { token, ...user } = data;

    setUser(user);

    setStatus("authenticated");

    router.replace("/painel");
  }

  function signOut() {
    secureLocalStorage.clear();
    setStatus("unathenticated");
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
      }
    );
  }

  return context;
}
