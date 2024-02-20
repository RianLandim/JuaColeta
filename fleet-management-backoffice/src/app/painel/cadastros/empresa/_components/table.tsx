"use client";

import { Table } from "@/components/Table";
import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import { useCompaniesList } from "@/hooks/queries/useCompanyList";
import { useQueryParam } from "@/hooks/useQueryParam";
import { cnpjMask } from "@/utils/format/cnpj";
import { Eye } from "lucide-react";
import { useRouter } from "next/router";

export function CompanyTable() {
  const router = useRouter();

  const companiesQuery = useCompaniesList();
  const { createQueryString, searchParams } = useQueryParam();

  const filteredCompanies = companiesQuery.data?.filter((item) => {
    if (item.socialName === searchParams.get("name")) {
      return true;
    }

    if (item.cnpj === searchParams.get("cnpj")) {
      return true;
    }

    return true;
  });

  return (
    <Table
      headers={["nome", "cnpj", "endereço", ""]}
      rows={filteredCompanies?.map((company) => (
        <TableRow key={company.id}>
          <TableCell>{company.socialName}</TableCell>
          <TableCell>{cnpjMask(company.cnpj)}</TableCell>
          <TableCell>
            {company.address.city}-{company.address.state}
          </TableCell>
          <TableCell className="w-full flex flex-row items-center justify-center gap-2">
            <Button
              onClick={() =>
                createQueryString([{ name: "editId", value: company.id }])
              }
            >
              Editar
            </Button>
            <Button
              title="Ver Usuários"
              onClick={() =>
                router.push(
                  `/painel/cadastros/usuarios?companyId=${company.id}`
                )
              }
            >
              <Eye className="w-4 h-4" />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    />
  );
}
