"use client";

import Image from "next/image";

export default function CompanyProfile() {
  return (
    <main className="font-normal text-main self-start justify-self-start h-screen pl-[5%]">
      <div>
        <p className="text-5xl pt-[10%]">Perfil da Empresa</p>
        <div>
          <div className="flex gap-10 mb-[7%] mt-[5%]">
            <Image
              src="/companyProfile/fotoEmpresa.svg"
              alt="Foto da empresa"
              width={200}
              height={200}
            />
            <p className="font-semibold text-4xl">Ex.Empresa1</p>
          </div>

          <div>
            <p className="font-medium text-xl mb-5">Visão geral da empresa</p>
            <div className="flex gap-9">
              <div className="bg-[#181D1A]/60 border-2 border-main rounded-xl py-[1.8%] pl-[4%] flex items-center gap-5 w-[340px]">
                <Image
                  src="/companyProfile/caminhaoOperante.svg"
                  alt="Caminhão operantes"
                  width={62}
                  height={10}
                  className="bg-main/70 rounded-2xl px-[2%] py-[3.7%] mb-[4%]"
                />
                <div className="flex flex-col">
                  <p className="font-extrabold text-xl">Caminhões operantes</p>
                  <p className="text-3xl font-normal">36</p>
                </div>
              </div>

              <div className="bg-[#181D1A]/60 border-2 border-main rounded-xl py-[1%] pl-[4%] flex items-center gap-5 w-[390px]">
                <Image
                  src="/companyProfile/caminhaoComProblema.svg"
                  alt="Caminhão com Problemas"
                  width={65}
                  height={70}
                  className="bg-main/70 rounded-2xl px-[3%] py-[1.8%] mb-[4%]"
                />
                <div className="flex flex-col">
                  <p className="font-extrabold text-xl">
                    Caminhões com problemas
                  </p>
                  <p className="text-3xl font-medium">7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
