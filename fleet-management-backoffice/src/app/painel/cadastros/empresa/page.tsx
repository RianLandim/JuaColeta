"use client";

import { useCompaniesList } from "@/hooks/queries/useCompanyList";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { CreateCompanyDialog } from "@/components/cadastros/CreateCompanyDialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cnpjMask } from "@/utils/format/cnpj";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";

const filterSchema = z.object({
  name: z.string(),
  cnpj: z.string(),
  email: z.string(),
});

type FilterSchemaProps = z.infer<typeof filterSchema>;

export default function CompanyRegister() {
  const companiesQuery = useCompaniesList();

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const { register, handleSubmit } = useForm<FilterSchemaProps>({
    resolver: zodResolver(filterSchema),
    values: {
      name: searchParams.get("name") ?? "",
      cnpj: searchParams.get("cnpj") ?? "",
      email: searchParams.get("email") ?? "",
    },
  });

  const handleFilter: SubmitHandler<FilterSchemaProps> = ({
    name,
    cnpj,
    email,
  }) => {
    router.push(pathname + "?" + createQueryString("name", name));
  };

  return (
    <main className="w-full flex flex-col items-center justify-center gap-4 p-4">
      <h1 id="title" className="self-start font-bold text-2xl">
        Empresas
      </h1>

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
          <Input
            className="w-auto"
            placeholder="Email"
            {...register("email")}
          />

          <Button type="submit" variant="outline">
            <Search className="w-4 h-4 mr-2" /> Filtrar
          </Button>
        </form>

        <CreateCompanyDialog />
      </div>

      <Table className="w-full rounded-md bg-slate-300">
        <TableHeader>
          <TableHead>Nome</TableHead>
          <TableHead>CNPJ</TableHead>
          <TableHead>Endereço</TableHead>
        </TableHeader>
        <TableBody>
          {companiesQuery.data?.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{company.socialName}</TableCell>
              <TableCell>{cnpjMask(company.cnpj)}</TableCell>
              <TableCell>{company.address.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
