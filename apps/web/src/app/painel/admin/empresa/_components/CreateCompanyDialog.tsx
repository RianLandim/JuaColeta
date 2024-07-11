import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  CreateCompany,
  cepValidator,
  createCompanyValidator,
} from "@jua/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "@/components/ui/inputField";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FETCH_VEHICLES_KEY } from "@/hooks/queries/useTruck";
import { useCreateCompanyMutation } from "@/hooks/mutations/useCreateCompany";
import { useHookFormMask } from "use-mask-input";

export function CreateCompanyDialog() {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    formState: { errors },
  } = useForm<CreateCompany>({
    resolver: zodResolver(createCompanyValidator),
    defaultValues: {},
  });

  const registerWithMask = useHookFormMask(register);

  const createCompanyMutation = useCreateCompanyMutation();
  const { toast } = useToast();
  const apiUtils = useQueryClient();

  const submit: SubmitHandler<CreateCompany> = (data) => {
    createCompanyMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Sucesso",
          description: "Caminhão registrado com sucesso",
        });
        reset();
        apiUtils.invalidateQueries({ queryKey: FETCH_VEHICLES_KEY });
        setOpen(false);
      },
      onError: (error) => {
        console.error(error);

        toast({
          title: "Erro",
          description: "Ocorreu um erro ao registrar o caminhão",
          variant: "destructive",
        });
      },
    });
  };

  useEffect(() => {
    async function getAddress() {
      const cep = watch("address.zipCode").replace(/-/g, "");

      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v2/${cep}`,
      );

      if (!response.ok) {
        console.log("error");

        setError("address.zipCode", {
          message: "Cep não encontrado",
          type: "onChange",
        });
        return;
      }

      const responseJSON = await response.json();

      const address = cepValidator.parse(responseJSON);

      reset({
        address: {
          ...address,
          district: address.neighborhood ?? undefined,
          city: address.city ?? undefined,
          street: address.street ?? undefined,
        },
      });
    }

    void getAddress();
  }, [watch("address.zipCode")]);

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          setOpen(false);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Adicionar Empresa</Button>
      </DialogTrigger>
      <DialogContent className="bg-main">
        <DialogHeader>
          <DialogTitle className="text-white">
            Adicione seu Caminhão
          </DialogTitle>
          <DialogDescription className="text-slate-700">
            Preencha todas as informações corretamente
          </DialogDescription>
        </DialogHeader>
        <form
          className="w-full flex gap-4 flex-col"
          onSubmit={handleSubmit(submit)}
        >
          <InputField
            label="Razão Social"
            inputProps={register("socialName")}
          />
          <InputField
            label="Cnpj"
            inputProps={registerWithMask("cnpj", "99.999.999/9999-99")}
          />
          <InputField
            label="Cep"
            inputProps={registerWithMask("address.zipCode", "99999-999")}
            error={errors.address?.zipCode?.message}
          />
          <InputField label="Estado" inputProps={register("address.state")} />
          <InputField label="Cidade" inputProps={register("address.city")} />
          <InputField
            label="Bairro"
            inputProps={register("address.district")}
          />
          <div className="w-full flex gap-4">
            <InputField label="Rua" inputProps={register("address.street")} />
            <InputField
              label="Numero"
              inputProps={register("address.number")}
              className="w-1/3"
            />
          </div>

          <Button
            type="submit"
            variant="outline"
            isLoading={createCompanyMutation.status === "pending"}
          >
            Salvar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
