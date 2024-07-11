"use client";

import React from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./input";
import { Button } from "./button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

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
    <main className="bg-[#18101A]/60 border-2 border-[#8CC63F] pt-[4%] pb-[5.5%] rounded-xl text-main text-center">
      <div className="flex items-center">
        <Link href="/configuracoes">
          <div className="pr-16 pl-14">
            <Image
              src="/settingsIcons/arrowBack.svg"
              alt="Seta voltar"
              height={80}
              width={35}
            />
          </div>
        </Link>
        <h1 className="font-semibold text-3xl pr-36">Atualize sua senha</h1>
      </div>

      <p className="font-light py-[9%]">
        Por favor, coloque sua senha existente e<br />a sua nova senha
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <div className="space-y-4  pb-28">
          <Input
            className="placeholder:text-main border-main rounded-[10px] bg-transparent w-80"
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

        <Button className="bg-main rounded-full w-80 text-black text-base font-medium hover:bg-[#39B54A]">
          Mudar senha
        </Button>
      </form>
    </main>
  );
}
