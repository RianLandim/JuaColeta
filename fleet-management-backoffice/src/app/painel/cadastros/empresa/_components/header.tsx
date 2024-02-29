"use client";

import { CreateCompanyDialog } from "@/components/cadastros/empresa/CreateCompanyDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQueryParam } from "@/hooks/useQueryParam";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const filterSchema = z.object({
  name: z.string(),
  cnpj: z.string(),
});

type FilterSchemaProps = z.infer<typeof filterSchema>;

export function Header() {
  const { createQueryString, searchParams } = useQueryParam();

  const { register, handleSubmit } = useForm<FilterSchemaProps>({
    resolver: zodResolver(filterSchema),
    values: {
      name: searchParams.get("Socialname") ?? "",
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
  );
}
