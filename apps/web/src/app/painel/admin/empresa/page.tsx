"use client";

import { DataTable } from "@/components/Table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { LoadingIndicator } from "./loadingIndicator";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { match, P } from "ts-pattern";
import { CircleEllipsisIcon } from "lucide-react";
import { useQueryParam } from "@/hooks/useQueryParam";
import { Company } from "@jua/validators/company";
import { useCompaniesList } from "@/hooks/queries/useCompanyList";
import { cnpjMask } from "@/utils/format/cnpj";
import { formatDateTime } from "@/utils/format/datetime";
import { CreateCompanyDialog } from "./_components/CreateCompanyDialog";
import { formatAddress } from "@/utils/format/address";

const columnHelper = createColumnHelper<Company>();

export default function Trucks() {
  const { createQueryString } = useQueryParam();

  const columns = useMemo(
    () => [
      columnHelper.accessor("socialName", {
        header: "Nome",
      }),
      columnHelper.accessor("cnpj", {
        header: "CNPJ",
        cell: (info) => cnpjMask(info.getValue()),
      }),
      columnHelper.accessor("address", {
        header: "Endereço",
        cell: (info) => formatAddress(info.getValue()),
      }),
      columnHelper.accessor("createdAt", {
        header: "Data de Cadastro",
        cell: (info) => formatDateTime(info.getValue()),
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

  const companyQuery = useCompaniesList();

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center gap-4 p-4">
      <header className="w-full flex items-center justify-between">
        <div id="header" className="self-start">
          <h1 className="font-bold text-white">Empresas</h1>
          <desc className="font-bold text-white text-sm">
            Visualize todas as empresas registrados
          </desc>
        </div>

        <CreateCompanyDialog />
      </header>

      <div className="w-full h-2/3">
        {match(companyQuery)
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
