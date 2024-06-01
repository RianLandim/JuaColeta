"use client";

import { DataTable } from "@/components/Table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoadingIndicator } from "@/components/ui/loadingIndicator";
import { Truck, useTruckList } from "@/hooks/queries/useTruck";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { match, P } from "ts-pattern";
import { CircleEllipsisIcon } from "lucide-react";

const columnHelper = createColumnHelper<Truck>();

export default function Trucks() {
  const columns = useMemo(
    () => [
      columnHelper.accessor("model", {
        header: "Modelo",
      }),
      columnHelper.accessor("plate", {
        header: "Placa",
      }),
      columnHelper.accessor("category", {
        header: "Categoria",
      }),
      columnHelper.display({
        id: "actions",
        header: "",
        size: 32,
        cell: () => (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CircleEllipsisIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Opções</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Editar</DropdownMenuItem>
              <DropdownMenuItem>Inativar</DropdownMenuItem>
              <DropdownMenuItem>Ver Motorista</DropdownMenuItem>
              <DropdownMenuItem>Ver Rota</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      }),
    ],
    []
  );

  const truckQuery = useTruckList();

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center gap-4 p-4">
      <div id="header" className="self-start">
        <h1 className="font-bold text-white">Caminhoẽs</h1>
        <desc className="font-bold text-white text-sm">
          Visualize todos os caminhões registrados
        </desc>
      </div>
      <div className="w-full h-2/3">
        {match(truckQuery)
          .with({ isLoading: true }, () => <LoadingIndicator />)
          .with({ isError: true }, () => (
            <span>Ocorreu um erro ao buscar os veiculos</span>
          ))
          .with({ data: P.nullish }, () => (
            <span>Nenhum veiculo encontrado</span>
          ))
          .with(
            { data: P.not(undefined).and(P.not(P.nullish)) },
            ({ data }) => <DataTable columns={columns} data={data} />
          )
          .exhaustive()}
      </div>
    </main>
  );
}