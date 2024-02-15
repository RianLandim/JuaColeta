"use client";

import { useCompaniesList } from "@/hooks/queries/useCompanyList";
import { Input } from "@/components/ui/input";
import { CreateCompanyDialog } from "@/components/cadastros/empresa/CreateCompanyDialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cnpjMask } from "@/utils/format/cnpj";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryParam } from "@/hooks/useQueryParam";
import { Table } from "@/components/Table";
import { TableCell, TableRow } from "@/components/ui/table";
import { EditCompanyDialog } from "@/components/cadastros/empresa/EditCompanyDialog";

const filterSchema = z.object({
  name: z.string(),
  cnpj: z.string(),
});

type FilterSchemaProps = z.infer<typeof filterSchema>;

export default function CompanyRegister() {
  const companiesQuery = useCompaniesList();
  const { createQueryString, searchParams } = useQueryParam();

  const { register, handleSubmit } = useForm<FilterSchemaProps>({
    resolver: zodResolver(filterSchema),
    values: {
      name: searchParams.get("name") ?? "",
      cnpj: searchParams.get("cnpj") ?? "",
    },
  });

  const handleFilter: SubmitHandler<FilterSchemaProps> = ({ cnpj, name }) => {
    createQueryString([
      { name: "name", value: name },
      { name: "cnpj", value: cnpj },
    ]);
  };

  return (
    <main className="w-full flex flex-col items-center justify-center gap-4 p-4">
      <h1 id="title" className="self-start font-bold text-2xl">
        Empresas
      </h1>

      <EditCompanyDialog />

      <div
        id="header"
        className="w-full flex flex-row items-center justify-between"
      >
        <form
          onSubmit={handleSubmit(handleFilter)}
          className="w-full gap-4 flex flex-row"
        >
          <Input className="w-auto" placeholder="Nome" {...register("name")} />
          <Input className="w-auto" placeholder="CNPJ" {...register("cnpj")} />

          <Button type="submit" variant="outline">
            <Search className="w-4 h-4 mr-2" /> Filtrar
          </Button>
        </form>

        <CreateCompanyDialog />
      </div>

      <Table
        headers={["nome", "cnpj", "endereço", ""]}
        rows={companiesQuery.data?.map((company) => (
          <TableRow key={company.id}>
            <TableCell>{company.socialName}</TableCell>
            <TableCell>{cnpjMask(company.cnpj)}</TableCell>
            <TableCell>
              {company.address.city}-{company.address.state}
            </TableCell>
            <TableCell>
              <Button
                onClick={() =>
                  createQueryString([{ name: "editId", value: company.id }])
                }
              >
                Editar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      />
    </main>
  );
}
