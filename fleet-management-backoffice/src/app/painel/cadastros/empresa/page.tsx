"use client";

import {
  type Companies,
  useCompaniesList,
} from "@/hooks/queries/useCompanyList";

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

export default function CompanyRegister() {
  const companiesQuery = useCompaniesList();

  return (
    <main className="w-full flex flex-col items-center justify-center gap-4 p-4">
      <h1 id="title" className="self-start font-bold text-2xl">
        Empresas
      </h1>

      <div
        id="header"
        className="w-full flex flex-row items-center justify-between"
      >
        <form className="w-full gap-4 flex flex-row">
          <Input className="w-auto" placeholder="Nome" />
          <Input className="w-auto" placeholder="CNPJ" />
          <Input className="w-auto" placeholder="Email" />

          <Button variant="outline">
            <Search className="w-4 h-4 mr-2" /> Filtrar
          </Button>
        </form>

        <CreateCompanyDialog />
      </div>

      <Table className="w-full rounded-md bg-slate-300">
        <TableHeader>
          <TableHead>Nome</TableHead>
          <TableHead>CNPJ</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Endereço</TableHead>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>Teste</TableCell>
              <TableCell>Teste-cnpj</TableCell>
              <TableCell>Teste-email</TableCell>
              <TableCell>Teste-endereço</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
