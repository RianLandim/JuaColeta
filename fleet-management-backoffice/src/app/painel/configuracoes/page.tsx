"use client";

import Image from "next/image";

export default function Settings() {
  return (
    <main className="bg-[#181D1A]/60 border-2 border-[#8CC63F] pb-[20%] px-[5%] rounded-xl">
      <div className="text-main text-xl font-normal pt-[14%] w-96">
        <div className="hover:cursor-pointer hover:text-[#39B54A] hover:underline">
          <div className="flex gap-4 pl-[27%]">
            <Image
              src="/settingsIcons/conta.svg"
              alt="Conta do usuário"
              width={27}
              height={27}
            />
            <p>Conta</p>
          </div>
          <hr className="my-4 border-main" />
        </div>
        <div className="hover:cursor-pointer hover:text-[#39B54A] hover:underline">
          <div className="flex gap-5 pl-[27%]">
            <Image
              src="/settingsIcons/caixaDeTexto.svg"
              alt="Notificações"
              width={22}
              height={22}
            />
            <p>Notificações</p>
          </div>
          <hr className="my-4 border-main" />
        </div>
        <div className="hover:cursor-pointer hover:text-[#39B54A] hover:underline flex gap-4 pl-[27%]">
          <Image
            src="/settingsIcons/ajuda.svg"
            alt="Ajuda"
            width={30}
            height={30}
          />
          <p>Acessibilidade</p>
        </div>
      </div>
    </main>
  );
}
