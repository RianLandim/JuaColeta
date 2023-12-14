"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Card } from "../../_components/Card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const signInFormSchema = z.object({
  email: z.string().email().min(1, "Email precisa ser preenchido"),
  password: z.string().min(1, "Senha precisa ser preenchida"),
});

type SignInProps = z.infer<typeof signInFormSchema>;

export function SignInCardFrom() {
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
      <h2 className="text-black font-bold text-3xl">Entrar</h2>

      <label
        htmlFor="email"
        className="self-start text-lg text-black font-bold"
      >
        E-mail
      </label>
      <Input type="email" {...register("email")} />
      <label
        htmlFor="password"
        className="self-start text-lg text-black font-bold"
      >
        Senha
      </label>
      <Input type="password" {...register("password")} />
      <Button className="w-full" type="submit">
        Entrar
      </Button>
    </Card>
  );
}
