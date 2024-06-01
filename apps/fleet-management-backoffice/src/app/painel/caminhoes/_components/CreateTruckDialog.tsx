import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";

import {
  CreateTruckValidator,
  CreateTruckValidatorProps,
} from "@fleet/validators";
import { zodResolver } from "@hookform/resolvers/zod";

export function CreateTruckDialog() {
  const { register, handleSubmit } = useForm<CreateTruckValidatorProps>({
    resolver: zodResolver(CreateTruckValidator),
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Adicionar Caminhão</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicione seu Caminhão</DialogTitle>
          <DialogDescription>
            Preencha todas as informações corretamente
          </DialogDescription>
        </DialogHeader>
        <form></form>
      </DialogContent>
    </Dialog>
  );
}
