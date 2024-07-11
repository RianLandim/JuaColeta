import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  EditTruckValidator,
  EditTruckValidatorProps,
} from "@jua/validators/truck";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "@/components/ui/inputField";
import { useToast } from "@/components/ui/use-toast";
import { useEditVehicleMutation } from "@/hooks/mutations/useEditVehicle";
import { useQueryParam } from "@/hooks/useQueryParam";
import { useTruckIdList } from "@/hooks/queries/useTruckId";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FETCH_VEHICLES_KEY } from "@/hooks/queries/useTruck";

export function EditTruckDialog() {
  const { createQueryString, searchParams } = useQueryParam();

  const { data } = useTruckIdList(searchParams.get("edit") ?? "");

  const { register, handleSubmit, reset } = useForm<EditTruckValidatorProps>({
    resolver: zodResolver(EditTruckValidator),
    defaultValues: {
      id: searchParams.get("edit") ?? data?.id,
    },
  });

  useEffect(() => {
    reset({
      id: searchParams.get("edit") ?? data?.id,
      category: data?.category ?? "D",
      color: data?.color,
      fabricator: data?.fabricator,
      model: data?.model,
      plate: data?.plate,
      renavam: data?.renavam,
      year: data?.year,
      companyId: data?.companyId,
      isSecured: data?.isSecured,
    });
  }, [data]);

  const editVehicleMutation = useEditVehicleMutation();
  const apiUtils = useQueryClient();
  const { toast } = useToast();

  const submit: SubmitHandler<EditTruckValidatorProps> = (data) => {
    editVehicleMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Sucesso",
          description: "Caminhão editado com sucesso",
        });
        reset();
        apiUtils.invalidateQueries({ queryKey: FETCH_VEHICLES_KEY });
        createQueryString([{ name: "edit", value: undefined }]);
      },
      onError: (error) => {
        console.error(error);

        toast({
          title: "Erro",
          description: "Ocorreu um erro ao editar o caminhão",
          variant: "destructive",
        });
      },
    });
  };

  return (
    <Dialog
      open={searchParams.has("edit")}
      onOpenChange={(open) => {
        if (!open) {
          createQueryString([{ name: "edit", value: undefined }]);
          reset();
        }
      }}
    >
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
            isLoading={editVehicleMutation.status === "pending"}
          >
            Salvar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
