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
import { CreateTruckDialog } from "./_components/CreateTruckDialog";
import { DeleteTruckDialog } from "./_components/DeleteTruckDialog";
import { useQueryParam } from "@/hooks/useQueryParam";
import { EditTruckDialog } from "./_components/EditTruckDialog";

const columnHelper = createColumnHelper<Truck & { id: string }>();

export default function Trucks() {
  const { createQueryString } = useQueryParam();

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
        cell: (info) => (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CircleEllipsisIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Opções</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() =>
                  createQueryString([
                    { name: "edit", value: info.row.original.id },
                  ])
                }
              >
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  createQueryString([
                    { name: "delete", value: info.row.original.id },
                  ])
                }
              >
                Inativar
              </DropdownMenuItem>
              <DropdownMenuItem>Ver Motorista</DropdownMenuItem>
              <DropdownMenuItem>Ver Rota</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      }),
    ],
    [],
  );

  const truckQuery = useTruckList();

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center gap-4 p-4">
      <DeleteTruckDialog />
      <EditTruckDialog />
      <header className="w-full flex items-center justify-between">
        <div id="header" className="self-start">
          <h1 className="font-bold text-white">Caminhoẽs</h1>
          <desc className="font-bold text-white text-sm">
            Visualize todos os caminhões registrados
          </desc>
        </div>

        <CreateTruckDialog />
      </header>

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
            //@ts-ignore due an bug
            ({ data }) => <DataTable columns={columns} data={data} />,
          )
          .exhaustive()}
      </div>
    </main>
  );
}
