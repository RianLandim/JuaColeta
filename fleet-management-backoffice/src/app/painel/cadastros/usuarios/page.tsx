"use client";

import { useCompaniesList } from "@/hooks/queries/useCompanyList";
import { Input } from "@/components/ui/input";
import { CreateCompanyDialog } from "@/components/cadastros/empresa/CreateCompanyDialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cnpjMask } from "@/utils/format/cnpj";
import { Table } from "@/components/Table";
import { TableCell, TableRow } from "@/components/ui/table";
import { EditCompanyDialog } from "@/components/cadastros/empresa/EditCompanyDialog";
import { register } from "module";
import { useQueryParam } from "@/hooks/useQueryParam";
import { CreateUserDialog } from "@/components/cadastros/usuario/CreateUserDialog";

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

export default function UsersPage() {
  const { createQueryString, searchParams } = useQueryParam();

  const filteredData = DATA.filter((item) => {
    if (searchParams.has("companyId")) {
      return item.companyId === searchParams.get("companyId");
    }

    return true;
  });

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

          <Button type="submit" variant="outline">
            <Search className="w-4 h-4 mr-2" /> Filtrar
          </Button>
        </form>

        <CreateUserDialog />
      </div>

      <Table
        headers={["nome", "Empresa", ""]}
        rows={filteredData.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.company?.name}</TableCell>
            <TableCell>
              <Button
                onClick={() =>
                  createQueryString([{ name: "editId", value: user.id }])
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
