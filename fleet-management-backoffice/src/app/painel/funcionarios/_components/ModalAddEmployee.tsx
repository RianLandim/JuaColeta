import { Input } from "@/components/ui/input";
import { Button } from "../../../../components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCreateEmployeeMutation } from "@/hooks/mutations/useCreateEmployee";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FETCH_USER_WITH_VEHICLES_KEY } from "@/hooks/queries/useEmployee";

const employeeFormSchema = z.object({
  name: z.string({ required_error: "Campo obrigatorio" }),
  email: z
    .string({ required_error: "Campo obrigatorio" })
    .email("Digite um email valido"),
  password: z
    .string({ required_error: "Campo obrigatorio" })
    .min(8, "Senha deve conter no minimo 8 caracteres"),
  cellphone: z
    .string({ required_error: "Campo obrigatorio" })
    .min(11, "Deve conter 11 caracteres"),
});

type EmployeeFormSchema = z.infer<typeof employeeFormSchema>;

export default function ModalAddEmployee() {
  const [open, setOpen] = useState(false);

  const form = useForm<EmployeeFormSchema>({
    resolver: zodResolver(employeeFormSchema),
    mode: "onChange",
  });

  const { toast } = useToast();

  const createEmployeeMutation = useCreateEmployeeMutation();

  const apiUtils = useQueryClient();

  const onSubmit: SubmitHandler<EmployeeFormSchema> = (data) => {
    createEmployeeMutation.mutate(
      { ...data, role: "DRIVER" },
      {
        onSuccess: () => {
          toast({
            title: "Sucesso",
            description: "Funcionario Cadastrado",
          });
          form.reset();
          apiUtils.invalidateQueries({
            queryKey: FETCH_USER_WITH_VEHICLES_KEY,
          });
          setOpen(false);
        },
        onError: (error) => {
          if ("message" in error) {
            toast({
              title: "Error",
              description: error.message,
              variant: "destructive",
            });
          }
        },
      }
    );
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
      <DialogTrigger>
        <Button className="font-bold text-white" onClick={() => setOpen(true)}>
          Cadastrar Funcionario
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-backgroundApp border-main">
        <DialogHeader>
          <DialogTitle className="text-white">
            Cadastro de funcionario
          </DialogTitle>
          <DialogDescription className="text-white">
            Preencha todos os campos corretamente
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Senha</FormLabel>
                  <FormControl>
                    <Input placeholder="Senha" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cellphone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="Telefone" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              isLoading={createEmployeeMutation.status === "pending"}
              className="w-full"
              type="submit"
            >
              Enviar
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
