"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Card } from "../../_components/Card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./button";
import { Input } from "./input";
import Link from "next/link";
import { UseSession } from "@/utils/providers/SessionProvider";

const signInFormSchema = z.object({
  email: z
    .string()
    .email("E-mail inválido")
    .min(1, "Email precisa ser preenchido"),
  password: z.string().min(1, "Senha precisa ser preenchida"),
});

type SignInProps = z.infer<typeof signInFormSchema>;

export function SignInCardFrom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>({ resolver: zodResolver(signInFormSchema) });

  const { signIn } = UseSession();

  const submit: SubmitHandler<SignInProps> = async (data) => signIn(data);

  return (
    <Card onSubmit={handleSubmit(submit)}>
      <h1 className="text-main font-bold text-3xl font-roboto pb-5 tracking-widest">
        ENTRAR
      </h1>

      <Input
        className="placeholder:text-main border border-main rounded-[50px]
        bg-transparent"
        placeholder="E-mail"
        type="email"
        {...register("email")}
      />
      {errors.email && (
        <label htmlFor="email" className="self-start text-base text-red-700">
          {errors.email.message}
        </label>
      )}

      <Input
        className="border border-main placeholder:text-main 
        bg-transparent rounded-[50px]"
        placeholder="Senha"
        type="password"
        {...register("password")}
      />
      {errors.password && (
        <label htmlFor="password" className="self-start text-base text-red-700">
          {errors.password.message}
        </label>
      )}
      <Link
        href="/recuperar-senha"
        className="mt-3 self-center text-sm 
         text-main hover:cursor-pointer underline"
      >
        Esqueceu a senha?
      </Link>
      <Button
        className="w-full bg-main rounded-[50px] mt-5 hover:bg-[#2b7c25]"
        type="submit"
      >
        Entrar
      </Button>
      <p className="text-ssm font-light">
        Ainda não tem um conta?{" "}
        <Link
          href="/recuperar-senha"
          className="mt-3 self-end hover:cursor-pointer underline"
        >
          Esqueceu a senha?
        </Link>
      </p>
    </Card>
  );
}
