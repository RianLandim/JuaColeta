"use client";

import { Button } from "../../../components/ui/button";
import Image from "next/image";
import CardFuncionario from "./_components/CardEmployee";
import { useState } from "react";
import ModalAddEmployee from "./_components/ModalAddEmployee";
import DashboardLoading, { DashboardError } from "../loading";
import { useEmployeesList } from "../../../hooks/queries/useEmployee";
import { P, match } from "ts-pattern";

interface EmployeeProps {
  name: string;
  phone: string;
  plate: string;
  idTruck: number;
}

export default function CompanyRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [seachText, setSearchText] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const EmployeesQuery = useEmployeesList();

  const filteredEmployees = () => {
    if (!EmployeesQuery || !EmployeesQuery.data) return [];

    let filtered = [...EmployeesQuery.data];

    if (filter === "alphabetical") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter === "idTruck") {
      filtered.sort((a, b) => a.idTruck - b.idTruck);
      if (seachText !== "") {
        filtered = filtered.filter((employee) => {
          employee.idTruck, toString() == seachText;
        });
      }
    } else if (filter === "name") {
      filtered = filtered.filter((employee) => {
        employee.name.toLowerCase().includes(seachText.toLowerCase());
      });
    }
    return filtered;
  };

  return (
    <>
      {match(EmployeesQuery)
        .with({ isPending: true }, () => <DashboardLoading />)
        .with({ isError: true }, () => (
          <DashboardError errorMessage={EmployeesQuery.error?.message} />
        ))
        .otherwise((employees) => (
          <main className="w-full flex flex-col gap-4 p-4 text-main h-screen relative">
            <div className="flex pt-[2.5%] max-2xl:pt-[5%] items-center w-full justify-between">
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

            {/* Filtros da página */}
            <div className="ml-4 flex space-x-7 items-center">
              <p>Filtros</p>
              <select
                className="bg-transparent border rounded-md px-2 py-1 text-sm focus:outline-none focus:border-main focus:text-black focus:bg-white/90"
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setSearchText("");
                }}
              >
                <option value="">Sem filtro</option>
                <option value="alphabetical">Ordem alfabética</option>
                <option value="idTruck">ID do Caminhão</option>
                <option value="name">Nome</option>
              </select>
              {(filter == "idTruck" || filter == "name") && (
                <div className="flex space-x-3 item">
                  <p>Digite aqui:</p>
                  <input
                    className="bg-transparent border rounded-md px-2 py-1 text-sm focus:outline-none focus:border-main focus:text-black focus:bg-white/90"
                    type="text"
                    value={seachText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
              )}
              {filter !== "" && (
                <button
                  className="hover:underline"
                  onClick={() => setFilter("")}
                >
                  Limpar filtros
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 h-full lg:gap-6 md:gap-4 w-full overflow-auto">
              <CardFuncionario
                key={1}
                plate={"11111"}
                idTruck={46657688}
                name={"Michael de Santa"}
                phone={"+1 555 432-9999"}
              />
              <CardFuncionario
                key={1}
                plate={"11111"}
                idTruck={46657688}
                name={"Michael de Santa"}
                phone={"+1 555 432-9999"}
              />
              <CardFuncionario
                key={1}
                plate={"11111"}
                idTruck={46657688}
                name={"Michael de Santa"}
                phone={"+1 555 432-9999"}
              />
              <CardFuncionario
                key={1}
                plate={"11111"}
                idTruck={46657688}
                name={"Michael de Santa"}
                phone={"+1 555 432-9999"}
              />
              <CardFuncionario
                key={1}
                plate={"11111"}
                idTruck={46657688}
                name={"Michael de Santa"}
                phone={"+1 555 432-9999"}
              />{" "}
              <CardFuncionario
                key={1}
                plate={"11111"}
                idTruck={46657688}
                name={"Michael de Santa"}
                phone={"+1 555 432-9999"}
              />{" "}
              <CardFuncionario
                key={1}
                plate={"11111"}
                idTruck={46657688}
                name={"Michael de Santa"}
                phone={"+1 555 432-9999"}
              />
              <CardFuncionario
                key={1}
                plate={"11111"}
                idTruck={46657688}
                name={"Michael de Santa"}
                phone={"+1 555 432-9999"}
              />
              <CardFuncionario
                key={1}
                plate={"11111"}
                idTruck={46657688}
                name={"Michael de Santa"}
                phone={"+1 555 432-9999"}
              />
              <CardFuncionario
                key={1}
                plate={"11111"}
                idTruck={46657688}
                name={"Michael de Santa"}
                phone={"+1 555 432-9999"}
              />
              <CardFuncionario
                key={1}
                plate={"11111"}
                idTruck={46657688}
                name={"Michael de Santa"}
                phone={"+1 555 432-9999"}
              />
              <CardFuncionario
                key={1}
                plate={"11111"}
                idTruck={46657688}
                name={"Michael de Santa"}
                phone={"+1 555 432-9999"}
              />
              <CardFuncionario
                key={1}
                plate={"11111"}
                idTruck={46657688}
                name={"Michael de Santa"}
                phone={"+1 555 432-9999"}
              />
              {employees.data !== null &&
                filteredEmployees().map((employee: EmployeeProps, index) => (
                  <CardFuncionario
                    key={index}
                    plate={employee.plate}
                    idTruck={employee.idTruck}
                    name={employee.name}
                    phone={employee.phone}
                  />
                ))}
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
