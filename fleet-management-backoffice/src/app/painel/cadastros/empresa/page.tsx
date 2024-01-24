"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from "@/components/Table";
import {
  type Companies,
  useCompaniesList,
} from "@/hooks/queries/useCompanyList";
import { formatAddress } from "@/utils/format/address";

import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { match } from "ts-pattern";

export default function CompanyRegister() {
  const companiesQuery = useCompaniesList();

  const columnHelper = createColumnHelper<Companies>();

  const columns = useMemo(
    () => [
      columnHelper.accessor("socialName", { header: "Nome" }),
      columnHelper.accessor("cnpj", { header: "CNPJ" }),
      columnHelper.display({
        id: "address",
        header: "Endereço",
        cell: (info) => formatAddress(info.row.original.address),
      }),
    ],
    []
  );

  return (
    <main>
      <span>Empresa</span>
      {match(companiesQuery)
        .with({ isLoading: true }, () => <p>Carregando...</p>)
        .with({ isError: true }, () => <p>Ocorreu um erro</p>)
        .otherwise(({ data }) => (
          <Table columns={columns} data={data ?? []} />
        ))}
    </main>
  );
}
