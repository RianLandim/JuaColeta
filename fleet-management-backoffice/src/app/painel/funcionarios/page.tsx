"use client";

import { Button } from "../../../components/ui/button";
import Image from "next/image";
import CardFuncionario from "./_components/CardEmployee";
import { useState } from "react";
import ModalAddEmployee from "./_components/ModalAddEmployee";
import { useQuery } from "@tanstack/react-query";
import DashboardLoading, { DashboardError } from "../loading";

interface EmployeeProps {
  email: string;
  password: string;
  name: string;
  cellphone: string;
  license?: string | null;
  role: "ADMIN" | "COMPANY_ADMIN" | "DRIVER" | "CLIENT";
  createdAt: Date;
  updatedAt: Date;
}

export default function CompanyRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const {
    isPending,
    error,
    data: employees,
  } = useQuery({
    queryFn: () =>
      fetch("http://localhost:3333/user").then((res) => res.json()),
    queryKey: ["getEmployees"],
  });
  if (isPending) return <DashboardLoading />;
  // if (error) return <DashboardError errorMessage={error.message} />;

  return (
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
        {/* Aqui os elementos serão mostrados com o card do funcionário.
        - Falta fazer a rota para trazer os dados do BANCO DE DADOS.  */}

        {/* {employees.map((employees: employees) => {
          <CardFuncionario
            plate={employees.plate}
            idTruck={employees.idTruck}
            name={employees.name}
            phone={employees.phone}
          />;
        })} */}

        <CardFuncionario
          plate="12X21-12X"
          idTruck={1}
          name="funcionário_name"
          phone="(88) 99999-9999"
        />
        <CardFuncionario
          plate="12X21-12X"
          idTruck={1}
          name="funcionário_name"
          phone="(88) 99999-9999"
        />
        <CardFuncionario
          plate="12X21-12X"
          idTruck={1}
          name="funcionário_name"
          phone="(88) 99999-9999"
        />
        <CardFuncionario
          plate="12X21-12X"
          idTruck={1}
          name="funcionário_name"
          phone="(88) 99999-9999"
        />
        <CardFuncionario
          plate="12X21-12X"
          idTruck={1}
          name="funcionário_name"
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
  );
}
