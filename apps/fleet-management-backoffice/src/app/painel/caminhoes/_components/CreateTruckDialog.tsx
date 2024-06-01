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

export function CreateTruckDialog() {
  const { register, handleSubmit, watch } = useForm<CreateTruckValidatorProps>({
    resolver: zodResolver(CreateTruckValidator),
    defaultValues: {
      category: "D",
      color: "",
      fabricator: "",
      model: "",
      plate: "",
      renavam: "",
      year: "",
    },
  });

  const submit: SubmitHandler<CreateTruckValidatorProps> = (data) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Adicionar Caminhão</Button>
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
          <Button type="submit" variant="outline">
            Salvar
          </Button>
        </form>

        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </DialogContent>
    </Dialog>
  );
}
