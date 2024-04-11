"use client";

import Image from "next/image";

export default function CompanyProfile() {
  return (
    <main className="font-normal text-main self-start justify-self-start h-screen pl-[5%]">
      <div>
        <h1 className="font-normal text-5xl">Perfil da Empresa</h1>
      </div>
      <div>
        <p className="font-medium">Visão geral da empresa</p>
        <div className="flex gap-9">
          <div className="bg-[#181D1A]/60 border-2 border-main rounded-xl px-[10%]">
          <Image 
              src="/companyProfile/caminhaoOperante.svg"
              alt="Caminhão operantes"
              width={65}
              height={70}
              className="bg-main/70 rounded-xl px-2 py-3"
            />
            <p>Caminhões opereantes</p>
            <p className="text-xl">36</p>
          </div>

          <div className="bg-[#181D1A]/60 border-2 border-main rounded-xl px-[10%]">
            <Image 
              src="/companyProfile/caminhaoComProblema.svg"
              alt="Caminhão com Problemas"
              width={60}
              height={70}
              className="bg-main/70 rounded-xl px-2 py-2"
            />
            <p>Caminhões com problemas</p>
            <p className="text-xl">7</p>
          </div>
        </div>
      </div>
    </main>
  );
}
