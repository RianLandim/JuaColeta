import secureLocalStorage from "react-secure-storage";
import { z } from "zod";

type FetchApiOptions<TValidator extends z.ZodTypeAny> = (
  | {
      method: "GET" | "DELETE";
    }
  | {
      method: "POST" | "PUT" | "PATCH";
      body?: unknown;
    }
) & {
  queryParams?: Record<string, string | string[] | undefined>;
  validator?: TValidator;
  credentials?: RequestCredentials;
};

export async function fetchApi<TValidator extends z.ZodType<unknown>>(
  route: string,
  options: FetchApiOptions<TValidator> = {
    method: "GET",
  }
) {
  const url = new URL(route, "http://localhost:3333/");

  const response = await fetch(url, {
    method: options.method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: options.credentials ?? "include",
    body:
      options.method === "POST" ||
      options.method === "PUT" ||
      options.method === "PATCH"
        ? JSON.stringify(options.body)
        : undefined,
  });

  if (!response.ok) {
    const error = (await response.json()) as { message?: string };
    return [null, error] as const;
  }

  const responseJSON = await response.json();

  if (!options.validator) {
    const data = responseJSON as TValidator extends z.ZodType<infer T>
      ? T
      : never;

    return [data, null] as const;
  }

  const parsedResponse = options.validator.safeParse(responseJSON);

  if (!parsedResponse.success) {
    throw new Error("Resposta não corresponde ao esperado");
  }

  const data = responseJSON as TValidator extends z.ZodType<infer T>
    ? T
    : never;

  return [data, null] as const;
}
