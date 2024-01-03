import { api } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

type LoginRequest = { email: string; password: string };

const fetchLogin = (email: string, password: string) =>
  api.post("authentication/login", { email, password });

const useLogin = () =>
  useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }: LoginRequest) =>
      fetchLogin(email, password),
  });

export { fetchLogin, useLogin };
