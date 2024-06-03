import { env } from "@/env";
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

type ErrorLike = {
  message?: string;
  statusCode: number;
};

export async function fetchApi<TValidator extends z.ZodType<unknown>>(
  route: string,
  options: FetchApiOptions<TValidator> = {
    method: "GET",
  },
) {
  const url = new URL(route, env.NEXT_PUBLIC_BASE_URL);

  Object.entries(options.queryParams ?? {}).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      url.searchParams.delete(key);
      value
        .filter((v) => v !== undefined)
        .forEach((v) => url.searchParams.append(key, v));
    } else if (value !== undefined) {
      url.searchParams.set(key, value);
    }
  });

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
    const error = (await response.json()) as ErrorLike;
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
