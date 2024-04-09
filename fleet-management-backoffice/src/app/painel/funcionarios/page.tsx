"use client";

import { Button } from "../../../components/ui/button";
import Image from "next/image";
import CardFuncionario from "./_components/CardEmployee";
import { useState } from "react";
import ModalAddEmployee from "./_components/ModalAddEmployee";
import DashboardLoading, { DashboardError } from "../loading";
import { useEmployeesList } from "../../../hooks/queries/useEmployee";
import { match } from "ts-pattern";

interface EmployeeProps {
  name: string;
  phone: string;
  plate: string;
  idTruck: number;
}

export default function CompanyRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const EmployeesQuery = useEmployeesList();

  return (
    <>
      {match(EmployeesQuery)
        .with({ isPending: true }, () => <DashboardLoading />)
        .with({ isError: true }, () => (
          <DashboardError errorMessage={EmployeesQuery.error?.message} />
        ))
        .otherwise((employees) => (
          <main className="w-full flex flex-col gap-4 p-4 text-main h-full relative">
            <div className="flex pt-[2.5%] max-2xl:l:pt-[5%] items-center w-full justify-between">
              <h1 id="title" className="text-5xl ">
                Funcionários
              </h1>
              <Button
                className={`bg-main text-xl rounded-full text-black font-normal w-[30%] hover:bg-main ${
                  isModalOpen ? "hidden" : ""
                }`}
                onClick={openModal}
              >
                <Image
                  src="/addIcon.svg"
                  alt="addIcon"
                  height={30}
                  width={30}
                  className="mr-3"
                />
                Adicionar Funcionário
              </Button>
            </div>
            <div>
              <p>Filtros</p>
            </div>
            <div className="grid grid-rows-3 min-[1900px]:grid-rows-4 grid-flow-col lg:gap-6 md:gap-4 h-full w-full">
              {employees.data !== null &&
                employees.data.map((employee: EmployeeProps, index) => (
                  <CardFuncionario
                    key={index}
                    plate={employee.plate}
                    idTruck={employee.idTruck}
                    name={employee.name}
                    phone={employee.phone}
                  />
                ))}

              <CardFuncionario
                plate="12X21-12X"
                idTruck={1}
                name="ai pai"
                phone="(88) 99999-9999"
              />
            </div>
            <div
              className={`flex justify-center items-center absolute top-0
       left-0 w-full h-full ${isModalOpen ? "bg-black/60" : "hidden"}`}
            >
              {isModalOpen && <ModalAddEmployee closeModal={closeModal} />}
            </div>
          </main>
        ))}
    </>
  );
}
