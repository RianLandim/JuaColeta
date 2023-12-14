"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Card } from "../../_components/Card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const signInFormSchema = z.object({
  email: z
    .string()
    .email("E-mail invalido")
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
      <h2 className="text-black font-bold text-3xl">Recuperar</h2>
      <label
        htmlFor="email"
        className="self-start text-lg text-black font-bold"
      >
        E-mail
      </label>
      <Input type="email" {...register("email")} />
      {errors.email && (
        <label htmlFor="email" className="self-start text-base text-red-700">
          {errors.email.message}
        </label>
      )}

      <Button className="w-full" type="submit">
        Enviar
      </Button>
    </Card>
  );
}
