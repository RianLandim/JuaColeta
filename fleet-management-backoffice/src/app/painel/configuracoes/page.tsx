"use client";

import Image from "next/image";

export default function Settings() {
  return (
    <main className="bg-[#181D1A]/60 border-2 border-[#8CC63F] pb-[18%] px-[7%] rounded-xl">
      <div className="text-main text-xl font-normal pt-[14%] w-96">
        <div className="hover:cursor-pointer hover:text-[#39B54A] hover:underline flex justify-between items-center">
          <div>
            <p>Empresa</p>
            <p className="font-extralight">Empresa X</p>
          </div>
          <Image
            src="/settingsIcons/arrowIcon.svg"
            alt="Seta"
            width={20}
            height={20}
            className="hover:filter hover:brightness-125"
          />
        </div>
        <hr className="my-4 border-main" />

        <div className="hover:cursor-pointer hover:text-[#39B54A] hover:underline flex justify-between items-center">
          <div>
            <p>E-mail</p>
            <p className="font-extralight">empresax@gmail.com</p>
          </div>
          <Image
            src="/settingsIcons/arrowIcon.svg"
            alt="Seta"
            width={20}
            height={20}
            className="hover:filter hover:brightness-125"
          />
        </div>
        <hr className="my-4 border-main" />

        <div className="hover:cursor-pointer hover:text-[#39B54A] hover:underline flex justify-between items-center">
          <p>Senha</p>
          <Image
            src="/settingsIcons/arrowIcon.svg"
            alt="Seta"
            width={20}
            height={20}
            className="hover:filter hover:brightness-125"
          />
        </div>
        <hr className="my-4 border-main" />

        <div className="text-[#CC3030] hover:cursor-pointer hover:font-extrabold hover:underline">
          <p>Deletar conta</p>
        </div>
      </div>
    </main>
  );
}
