/* eslint-disable react-hooks/rules-of-hooks */
import { redirect } from "next/navigation";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { cookies } from "next/headers";
import { fetchApi } from "../api";
import { z } from "zod";

type User = {
  id: string;
  email: string;
  name: string;
  cellphone: string;
  license: string;
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
};

type SignInParams = {
  email: string;
  password: string;
};

interface SessionContextProps {
  user: User;
  status: SessionStatus;
  signIn(params: SignInParams): void;
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
  license: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
});

type SessionProvider = {
  children: ReactNode;
};

export default function SessionProvider({ children }: SessionProvider) {
  const [status, setStatus] = useState<SessionStatus>("unathenticated");
  const [user, setUser] = useState<User>({} as User);

  async function signIn({ email, password }: SignInParams) {
    const [data, error] = await fetchApi("authentication/login", {
      method: "POST",
      body: { email, password },
      validator: userValidator,
      credentials: "same-origin",
    });

    if (error) {
      throw new Error(error.message ?? "");
    }

    if (data) {
      setUser(data);
    }
  }

  function signOut() {}

  return (
    <SessionContext.Provider value={{ status, user, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
}

export function signIn(params: SignInParams) {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error(
      "signIn must be inside SessionProvider, verify if SessionProvider is setted on initial settings",
      {
        cause: "SessionProvider not been settled",
      }
    );
  }

  return context.signIn(params);
}

export function signOut() {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error(
      "signOut must be inside SessionProvider, verify if SessionProvider is setted on initial settings",
      {
        cause: "SessionProvider not been settled",
      }
    );
  }

  return context.signOut();
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

  const { status, user } = context;

  if (status === "unathenticated" && options?.required && options.required) {
    redirect("/entrar");
  } else {
    return {
      status,
      user,
    };
  }
}
