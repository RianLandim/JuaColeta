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
  CreateTruckValidator,
  CreateTruckValidatorProps,
} from "@fleet/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "@/components/ui/inputField";
import { useCreateVehicleMutation } from "@/hooks/mutations/useCreateVehicle";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FETCH_VEHICLES_KEY } from "@/hooks/queries/useTruck";

export function CreateTruckDialog() {
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm<CreateTruckValidatorProps>({
    resolver: zodResolver(CreateTruckValidator),
    defaultValues: {
      category: "D",
      color: "",
      fabricator: "",
      model: "",
      plate: "",
      renavam: "",
      year: "",
      companyId: "x9unlf5rw4hhm15npwjkl5g4",
      isSecured: true,
    },
  });

  const createVehicleMutation = useCreateVehicleMutation();
  const { toast } = useToast();
  const apiUtils = useQueryClient();

  const submit: SubmitHandler<CreateTruckValidatorProps> = (data) => {
    createVehicleMutation.mutate(data, {
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
        <Button onClick={() => setOpen(true)}>Adicionar Caminhão</Button>
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
          <InputField label="Modelo" inputProps={register("model")} />
          <InputField label="Fabricante" inputProps={register("fabricator")} />
          <InputField label="Cor" inputProps={register("color")} />
          <InputField label="Placa" inputProps={register("plate")} />
          <InputField label="Renavam" inputProps={register("renavam")} />
          <InputField label="Ano" inputProps={register("year")} />
          <Button
            type="submit"
            variant="outline"
            isLoading={createVehicleMutation.status === "pending"}
          >
            Salvar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
