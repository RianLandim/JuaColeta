import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { InputField } from "@/components/ui/inputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, PlusCircle } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const createUserSchema = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string(),
  cellphone: z.string(),
  role: z.enum(["ADMIN", "COMPANY_ADMIN", "DRIVER"]),
});

type CreateUserProps = z.infer<typeof createUserSchema>;

export function CreateUserDialog() {
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserProps>({
    resolver: zodResolver(createUserSchema),
  });

  const submit: SubmitHandler<CreateUserProps> = (data) => console.log(data);

  const PassIcon = showPass ? Eye : EyeOff;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="w-4 h-4 mr-2" />
          Adicionar Usuário
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar Usuário</DialogTitle>
        </DialogHeader>
        <form
          className="w-full flex flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit(submit)}
        >
          <div className="w-full flex flex-row gap-2">
            <InputField
              label="Email"
              inputProps={register("email")}
              className="w-2/3"
            />
            <InputField
              label="Senha"
              className="w-1/3"
              inputProps={{
                ...register("password"),
                type: showPass ? "text" : "password",
              }}
              rightIcon={
                <PassIcon
                  onClick={() => setShowPass(!showPass)}
                  className="w-5 h-5 absolute right-8 hover:cursor-pointer"
                />
              }
            />
          </div>
          <div className="w-full flex flex-row gap-2">
            <InputField label="Nome" inputProps={register("name")} />
            <InputField label="Telefone" inputProps={register("cellphone")} />
            <InputField label="Cargo" inputProps={register("role")} />
          </div>
          <DialogFooter className="self-end">
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
