"use client";

import { z } from "zod";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { PlusCircle } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../ui/input";
import { useHookFormMask } from "use-mask-input";
import { useFetchCep } from "@/hooks/queries/useFetchCep";
import { useEffect, useState } from "react";
import { useCreateCompanyMutation } from "@/hooks/mutations/useCreateCompany";
import { useQueryClient } from "@tanstack/react-query";
import { FETCH_COMPANIES_KEY } from "@/hooks/queries/useCompanyList";

const createCompanySchema = z.object({
  name: z.string(),
  cnpj: z.string(),
  zipCode: z.string(),
  state: z.string(),
  country: z.string(),
  district: z.string(),
  number: z.number(),
  city: z.string(),
  email: z.string(),
  street: z.string(),
});

type CreateCompanySchemaProps = z.infer<typeof createCompanySchema>;

export function CreateCompanyDialog() {
  const [fetch, setFetch] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<CreateCompanySchemaProps>({
    resolver: zodResolver(createCompanySchema),
  });

  const createCompanyMutation = useCreateCompanyMutation();
  const queryClient = useQueryClient();

  const registerWithMask = useHookFormMask(register);

  const submit: SubmitHandler<CreateCompanySchemaProps> = async (data) => {
    const { name, cnpj, ...address } = data;

    await createCompanyMutation.mutateAsync(
      {
        cnpj,
        socialName: name,
        address,
      },
      {
        onSuccess: (company) => {
          if (company) {
            queryClient.setQueryData(
              [FETCH_COMPANIES_KEY],
              (data: unknown[]) => {
                return [...data, company];
              }
            );
          }

          setOpen(false);
        },
      }
    );
  };

  const { data: cepResponse, isLoading: cepLoading } = useFetchCep({
    cep: watch("zipCode", ""),
    enabled: fetch,
  });

  useEffect(() => {
    if (cepResponse) {
      setValue("city", cepResponse.city);
      setValue("state", cepResponse.state);
      setValue("district", cepResponse.neighborhood ?? "");
      setValue("country", "Brasil");
      setValue("street", cepResponse.street ?? "");
    }
  }, [cepResponse, setValue]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="w-4 h-4 mr-2" />
          Adicionar Empresa
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastro Empresas</DialogTitle>
          <DialogDescription>Registro de empresas</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(submit)}
          className="w-full flex flex-col items-center justify-center gap-4"
        >
          <div className="gap-2 w-full">
            <p className="self-start text-sm">Nome</p>
            <Input {...register("name")} placeholder="Nome" />
          </div>

          <div className="gap-2 w-full">
            <p className="self-start text-sm">Cnpj</p>
            <Input
              {...registerWithMask("cnpj", "99.999.999/9999-99")}
              placeholder="Cnpj"
            />
          </div>

          <div className="w-full flex flex-row gap-2">
            <div className="gap-2 w-full">
              <p className="self-start text-sm">Cep</p>
              <Input
                {...registerWithMask("zipCode", "99999-999")}
                placeholder="Cep"
                onBlur={() => setFetch(true)}
              />
            </div>

            <div className="gap-2 w-full">
              <p className="self-start text-sm">Pais</p>
              <Input
                {...register("country")}
                placeholder="Pais"
                disabled={cepLoading}
              />
            </div>

            <div className="gap-2 w-full">
              <p className="self-start text-sm">Estado</p>
              <Input
                {...register("state")}
                placeholder="Estado"
                disabled={cepLoading}
              />
            </div>
          </div>

          <div className="w-full flex flex-row gap-2">
            <div className="gap-2 w-full">
              <p className="self-start text-sm">Cidade</p>
              <Input {...register("city")} placeholder="Cidade" />
            </div>

            <div className="gap-2 w-full">
              <p className="self-start text-sm">Rua</p>
              <Input
                {...register("street")}
                placeholder="Rua"
                disabled={cepLoading}
              />
            </div>

            <div className="gap-2 w-full">
              <p className="self-start text-sm">Numero</p>
              <Input
                {...register("number")}
                placeholder="Numero"
                disabled={cepLoading}
              />
            </div>
          </div>

          <div className="gap-2 w-full">
            <p className="self-start text-sm">Email</p>
            <Input {...register("email")} placeholder="Email" />
          </div>

          <DialogFooter className="self-end">
            <Button type="button" variant="outline">
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
