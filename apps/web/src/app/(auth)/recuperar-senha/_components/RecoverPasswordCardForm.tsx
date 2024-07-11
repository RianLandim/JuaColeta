"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Card } from "../../_components/Card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./button";
import { Input } from "./input";

const signInFormSchema = z.object({
  email: z
    .string()
    .email("E-mail inválido")
    .min(1, "Email precisa ser preenchido"),
});

type SignInProps = z.infer<typeof signInFormSchema>;

export function RecoverPasswordCardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>({ resolver: zodResolver(signInFormSchema) });

  const submit: SubmitHandler<SignInProps> = (data) => {
    console.log(data);
  };

  return (
    <Card onSubmit={handleSubmit(submit)}>
      <h2 className=" font-bold text-3xl">Recuperar Conta</h2>
      <label htmlFor="email" className="self-start text-lg mt-5 font-bold">
        Digite seu e-mail:
      </label>
      <Input
        className="border border-main placeholder:text-main 
      bg-transparent rounded-[50px]"
        placeholder="E-mail"
        type="email"
        {...register("email")}
      />
      {errors.email && (
        <label htmlFor="email" className="self-start text-base text-red-700">
          {errors.email.message}
        </label>
      )}

      <Button
        className="w-full bg-main rounded-[50px] mt-10 hover:bg-[#2b7c25]"
        type="submit"
      >
        Enviar
      </Button>
    </Card>
  );
}
