"use client";

import { DataTable } from "@/components/Table";
import { useQueryParam } from "@/hooks/useQueryParam";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";

const DATA = [
  {
    id: "1",
    name: "Teste",
    email: "teste@gmail.com",
    companyId: "ewdm6n7bm1yviwigyeyefz7o",
    company: {
      id: "ewdm6n7bm1yviwigyeyefz7o",
      name: "Teste 3",
    },
  },
  {
    id: "2",
    name: "Teste2",
    email: "teste2@gmail.com",
    companyId: "ewdm6n7bm1yviwigyeyefz7o",
    company: {
      id: "ewdm6n7bm1yviwigyeyefz7o",
      name: "Teste 3",
    },
  },
  {
    id: "3",
    name: "Teste3",
    email: "teste@gmail.com",
    companyId: "",
  },
];

const columnHelper = createColumnHelper<(typeof DATA)[number]>();

export function UsersTable() {
  const { createQueryString, searchParams } = useQueryParam();

  const filteredData = DATA.filter((item) => {
    if (searchParams.has("companyId")) {
      return item.companyId === searchParams.get("companyId");
    }

    return true;
  });

  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "Nome",
      }),
      columnHelper.accessor("email", {
        header: "Email",
      }),
      columnHelper.accessor("company.name", {
        header: "Empresa",
      }),
    ],
    []
  );

  return <DataTable columns={columns} data={filteredData} />;
}
