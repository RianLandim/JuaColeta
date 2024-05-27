"use client";

import Image from "next/image";
import { useEmployeesList } from "@/hooks/queries/useEmployee";
import { useTruckIdList } from "@/hooks/queries/useTruckId";
import DashboardLoading, { DashboardError } from "../loading";

type CompanyProfileProps = {
  company: string;
};

export default function CompanyProfile({ company }: CompanyProfileProps) {
  const EmployeeQuery = useEmployeesList();
  const TruckIdQuery = useTruckIdList();

  if (EmployeeQuery.isPending || TruckIdQuery.isPending) {
    return <DashboardLoading />;
  }

  if (EmployeeQuery.isError || TruckIdQuery.isError) {
    return (
      <DashboardError
        errorMessage={
          EmployeeQuery.error?.message || TruckIdQuery.error?.message
        }
      />
    );
  }

  const employees = EmployeeQuery.data || [];
  const trucks = TruckIdQuery.data || [];

  const operantTrucks = trucks.filter(
    (truck) => truck.status === "operante"
  ).length;
  const problematicTrucks = trucks.filter(
    (truck) => truck.status === "em manutenção" || truck.status === "com atraso"
  ).length;

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
            <p className="font-semibold text-4xl">{company}</p>
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
                  <p className="text-3xl font-normal">{operantTrucks}</p>
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
                  <p className="text-3xl font-medium">{problematicTrucks}</p>
                </div>
              </div>
            </div>

            <table className="table-fixed mt-[4%] mb-[3%] border-separate border-spacing-2">
              <thead>
                <tr className="font-extrabold gap-5">
                  <th className="text-left pb-5">Caminhões</th>
                  <th className="pb-5">Motorista</th>
                  <th className="pb-5">Placa</th>
                  <th className="pb-5">Status</th>
                </tr>
              </thead>
              <tbody className="font-medium text-center bg-[#587158]">
                {employees.map((employee, index) => {
                  const truck = trucks.find(t => t.idTruck === employee.idTruck);

                  let statusClass = "";
                  let statusText = "";

                  if (truck && truck.status) {
                    if (truck.status === "operante") {
                      statusClass = "bg-[#39B54A]";
                      statusText = "Operante";
                    } else if (truck.status === "em manutenção") {
                      statusClass = "bg-[#CC3030]";
                      statusText = "Em manutenção";
                    } else if (truck.status === "com atraso") {
                      statusClass = "bg-[#FF6B00]";
                      statusText = "Com atraso";
                    }
                  }

                  return (
                    <tr key={index}>
                      <td className="py-[3%] pr-20 pl-4 text-left border-l-8 border-main">
                        {employee.idTruck}
                      </td>
                      <td className="px-5">
                        <div className="flex items-center">
                          <Image
                            src="/companyProfile/fotoPerfil.svg"
                            alt={`Foto de ${employee.name}`}
                            width={40}
                            height={20}
                            className="mr-2"
                          />
                          <span>{employee.name}</span>
                        </div>
                      </td>
                      <td>{employee.plate}</td>
                      <td className={`text-white px-6 ${statusClass}`}>
                        {statusText}
                      </td>
                    </tr>
                  );
                })}

                {/* <tr>
                  <td className="py-[3%] pr-20 pl-4 text-left border-l-8 border-main">
                    {123456}
                  </td>
                  <td className="px-5">
                    <div className="flex items-center">
                      <Image
                        src="/companyProfile/fotoPerfil.svg"
                        alt={`Foto de`}
                        width={40}
                        height={20}
                        className="mr-2"
                      />
                      <span>Bryan</span>
                    </div>
                  </td>
                  <td>9999-avm</td>
                  <td className={`text-white px-6 bg-[#39B54A]}`}>Operante</td>
                  <td className={`text-white px-6 bg-[#CC3030]}`}>
                    COM ATRASO
                  </td>
                </tr>
                <tr>
                  <td className="py-[3%] pr-20 pl-4 text-left border-l-8 border-main">
                    {123456}
                  </td>
                  <td className="px-5">
                    <div className="flex items-center">
                      <Image
                        src="/companyProfile/fotoPerfil.svg"
                        alt={`Foto de`}
                        width={40}
                        height={20}
                        className="mr-2"
                      />
                      <span>Bryan</span>
                    </div>
                  </td>
                  <td>9999-avm</td>
                  <td className={`text-white px-6 bg-[#39B54A]}`}>Operante</td>
                  <td className={`text-white px-6 bg-[#CC3030]}`}>
                    Em manutenção
                  </td>
                </tr>
                <tr>
                  <td className="py-[3%] pr-20 pl-4 text-left border-l-8 border-main">
                    {123456}
                  </td>
                  <td className="px-5">
                    <div className="flex items-center">
                      <Image
                        src="/companyProfile/fotoPerfil.svg"
                        alt={`Foto de`}
                        width={40}
                        height={20}
                        className="mr-2"
                      />
                      <span>Bryan</span>
                    </div>
                  </td>
                  <td>9999-avm</td>
                  <td className={`text-white px-6 bg-[#39B54A]}`}>Operante</td>

                  <td className={`text-white px-6 bg-[#FF6B00]}`}>
                    "Com atraso"
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
