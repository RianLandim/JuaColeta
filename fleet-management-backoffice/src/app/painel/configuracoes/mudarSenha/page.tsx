"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ChangePasswordSchema = z.object({
  existingPassword: z.string().min(1, "Senha existente precisa ser preenchida"),
  newPassword: z.string().min(1, "Nova senha precisa ser preenchida"),
});

type ChangePasswordProps = z.infer<typeof ChangePasswordSchema>;

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordProps>({
    resolver: zodResolver(ChangePasswordSchema),
  });

  const onSubmit: SubmitHandler<ChangePasswordProps> = (data) => {
    console.log("Senha existente:", data.existingPassword);
    console.log("Nova senha:", data.newPassword);
  };

  return (
    <main className="bg-[#18101A]/60 border-2 border-[#8CC63F] py-[6%] px-[10%] rounded-xl text-main text-center">
      <h1 className="font-semibold text-3xl">Atualize sua senha</h1>
      <p className="font-light py-[10%]">
        Por favor, coloque sua senha existente e<br />a sua nova senha
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4 pb-[30%]">
          <Input
            className="placeholder:text-main border-main rounded-[10px] bg-transparent"
            placeholder="Senha existente"
            type="password"
            {...register("existingPassword")}
          />
          {errors.existingPassword && (
            <label
              htmlFor="existingPassword"
              className="text-base font-bold text-red-700"
            >
              {errors.existingPassword.message}
            </label>
          )}

          <Input
            className="placeholder:text-main border-main rounded-[10px] bg-transparent"
            placeholder="Nova senha"
            type="password"
            {...register("newPassword")}
          />
          {errors.newPassword && (
            <label
              htmlFor="newPassword"
              className="text-base font-bold text-red-700"
            >
              {errors.newPassword.message}
            </label>
          )}
        </div>

        <Button className="bg-main rounded-full text-black font-medium w-full hover:bg-[#39B54A]">
          Mudar senha
        </Button>
      </form>
    </main>
  );
}
