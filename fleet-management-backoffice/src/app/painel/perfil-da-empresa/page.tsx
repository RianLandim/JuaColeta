"use client";

import Image from "next/image";

export default function CompanyProfile() {
  return (
    <main className="font-normal text-main self-start justify-self-start pl-[5%] h-screen overflow-y-auto w-full">
      <div>
        <p className="text-5xl pt-[4%]">Perfil da Empresa</p>
        <div>
          <div className="flex gap-10 mb-[4%] mt-[3%]">
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
              <div className="bg-[#181D1A]/60 border-2 border-main rounded-xl py-[1%] pl-[2%] flex items-center gap-5 w-[340px]">
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

              <div className="bg-[#181D1A]/60 border-2 border-main rounded-xl py-[1%] pl-[2%] flex items-center gap-5 w-[390px]">
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

            <table className="table-fixed mt-[4%] mb-[3%]">
              <thead>
                <tr className="font-extrabold gap-5">
                  <th className="text-left pb-5">Caminhões</th>
                  <th className="pb-5">Motorista</th>
                  <th className="pb-5">Placa</th>
                  <th className="pb-5">Status</th>
                </tr>
              </thead>
              <tbody className="font-medium text-center bg-[#587158]">
                <tr>
                  <td className="py-[3%] pr-20 pl-4 text-left border-l-8 border-main">
                    Caminhão 1
                  </td>
                  <td className="px-8">José Oliveira</td>
                  <td className="px-8">XXXXXXX</td>
                  <td className="bg-[#39B54A] text-white px-6">Operante</td>
                </tr>

                <tr>
                  <td className="py-[3.5%] pl-4 text-left border-l-8 border-main">
                    Caminhão 2
                  </td>
                  <td>Pablo Neruda</td>
                  <td>XXXXXXX</td>
                  <td className="bg-[#CC3030] text-white">
                    Em <br /> manutenção
                  </td>
                </tr>

                <tr>
                  <td className="py-[3.5%] pl-4 text-left border-l-8 border-main">
                    Caminhão 3
                  </td>
                  <td>Maria Vieira</td>
                  <td>XXXXXXX</td>
                  <td className="bg-[#FF6B00] text-white">
                    Com <br /> atraso
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
