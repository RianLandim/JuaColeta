"use client";

import { DataTable } from "@/components/Table";

import { useCompaniesList, Companies } from "@/hooks/queries/useCompanyList";
import { useQueryParam } from "@/hooks/useQueryParam";
import { cnpjMask } from "@/utils/format/cnpj";
import { createColumnHelper } from "@tanstack/react-table";
import { match } from "ts-pattern";

import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { LoadingIndicator } from "@/components/ui/loadingIndicator";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Eye, MoreHorizontal, Pencil } from "lucide-react";
import { useTableFilter } from "@/hooks/useTableFilter";

const columnHelper = createColumnHelper<Companies>();

export function CompanyTable() {
  const router = useRouter();

  const companiesQuery = useCompaniesList();
  const { createQueryString } = useQueryParam();
  const { columnsFilter, columnFilterChange } = useTableFilter();

  const columns = useMemo(
    () => [
      columnHelper.accessor("socialName", {
        filterFn: "includesString",
        enableColumnFilter: true,
        header: "Nome",
      }),
      columnHelper.accessor("cnpj", {
        filterFn: "includesString",
        enableColumnFilter: true,
        header: "CNPJ",
        cell: (info) => cnpjMask(info.getValue()),
      }),
      columnHelper.display({
        id: "actions",
        cell: (info) => {
          const companyId = info.row.original.id;
          return (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() =>
                    createQueryString([{ name: "editId", value: companyId }])
                  }
                >
                  <Pencil className="w-4 h-4 mr-2" /> Editar
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    router.push(
                      `/painel/cadastros/usuarios?companyId=${companyId}`
                    )
                  }
                >
                  <Eye className="w-4 h-4 mr-2" /> Ver Usuários
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      }),
    ],
    []
  );

  return (
    <>
      {match(companiesQuery)
        .with({ isFetching: true }, () => <LoadingIndicator />)
        .with({ isError: true }, () => (
          <p>Ocorreu um erro ao carregar os dados</p>
        ))
        .otherwise(({ data }) => (
          <DataTable
            columns={columns}
            data={data ?? []}
            columnFilters={columnsFilter}
            onColumnFiltersChange={columnFilterChange}
          />
        ))}
    </>
  );
}
