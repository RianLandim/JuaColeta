"use client";

import { CreateUserDialog } from "@/components/cadastros/usuario/CreateUserDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function UserHeader() {
  return (
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
  );
}
