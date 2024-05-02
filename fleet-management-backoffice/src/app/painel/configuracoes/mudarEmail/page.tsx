"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ChangeEmail {
  email: string;
}

export default function ChangeEmail({ email }: ChangeEmail) {
  return (
    <main className="bg-[#181D1A]/60 border-2 border-[#8CC63F] py-[6%] px-[7%] rounded-xl text-main text-center flex flex-col justify-center items-center">
      <h1 className="font-semibold text-3xl">E-mail</h1>
      <Image
        src="/settingsIcons/pencil-email.svg"
        alt="Editar e-mail"
        width={100}
        height={50}
        className="py-[4%]"
      />

      <div className="font-light">
        <p>
          Vamos precisar verificar seu antigo e-mail,
          <br /> <span className="font-bold">{email}</span>,<br />
          para podermos mudá-lo.
        </p>
        <p className="pt-[4%] pb-[10%]">
          Perdeu o acesso ao seu e-mail, por favor, entre em contatos
          <br />
          com o provedor do e-mail.
        </p>
      </div>

      <Button className="bg-main rounded-full text-black font-medium w-[70%] hover:bg-[#39B54A]">
        Enviar código de verificação
      </Button>
    </main>
  );
}
