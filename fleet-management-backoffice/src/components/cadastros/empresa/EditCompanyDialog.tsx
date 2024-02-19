import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useCompanyList } from "@/hooks/queries/useCompany";
import { useQueryParam } from "@/hooks/useQueryParam";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";
import { z } from "zod";

const editCompanySchema = z.object({
  socialName: z.string(),
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

type EditCompanyDialogProps = z.infer<typeof editCompanySchema>;

export function EditCompanyDialog() {
  const { searchParams, createQueryString } = useQueryParam();

  const companyId = searchParams.get("editId") ?? "";

  const { handleSubmit, register, reset } = useForm<EditCompanyDialogProps>({
    resolver: zodResolver(editCompanySchema),
  });
  const registerWithMask = useHookFormMask(register);

  const submit: SubmitHandler<EditCompanyDialogProps> = (data) => {
    console.log(data);
  };

  const { data: company, isLoading } = useCompanyList(companyId);

  useEffect(() => {
    reset({
      ...company,
      city: company?.address.city,
      country: company?.address.country,
      district: company?.address.country,
      number: company?.address.number,
      state: company?.address.state,
      street: company?.address.street,
      zipCode: company?.address.zipCode,
    });
  }, [company]);

  return (
    <Dialog
      open={searchParams.has("editId")}
      onOpenChange={(open) => {
        if (!open) {
          createQueryString([{ name: "editId", value: undefined }]);
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edição de Empresa</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(submit)}
          className="w-full flex flex-col items-center justify-center gap-4"
        >
          {isLoading ? (
            <DialogSkeleton />
          ) : (
            <>
              <div className="gap-2 w-full">
                <p className="self-start text-sm">Nome</p>
                <Input {...register("socialName")} placeholder="Nome" />
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
                  />
                </div>

                <div className="gap-2 w-full">
                  <p className="self-start text-sm">Pais</p>
                  <Input {...register("country")} placeholder="Pais" />
                </div>

                <div className="gap-2 w-full">
                  <p className="self-start text-sm">Cidade</p>
                  <Input {...register("city")} placeholder="Cidade" />
                </div>

                <div className="gap-2 w-fit">
                  <p className="self-start text-sm">UF</p>
                  <Input {...register("state")} placeholder="Estado" />
                </div>
              </div>

              <div className="w-full flex flex-row gap-2">
                <div className="gap-2 w-full">
                  <p className="self-start text-sm">Rua</p>
                  <Input {...register("street")} placeholder="Rua" />
                </div>

                <div className="gap-2 w-full">
                  <p className="self-start text-sm">Numero</p>
                  <Input {...register("number")} placeholder="Numero" />
                </div>
              </div>

              <div className="gap-2 w-full">
                <p className="self-start text-sm">Email</p>
                <Input {...register("email")} placeholder="Email" />
              </div>

              <DialogFooter className="self-end">
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}

function DialogSkeleton() {
  return (
    <>
      <div className="gap-2 w-full">
        <Skeleton />
      </div>

      <div className="gap-2 w-full">
        <Skeleton />
      </div>

      <div className="w-full flex flex-row gap-2">
        <div className="gap-2 w-full">
          <Skeleton />
        </div>

        <div className="gap-2 w-full">
          <Skeleton />
        </div>

        <div className="gap-2 w-full">
          <Skeleton />
        </div>
      </div>

      <div className="w-full flex flex-row gap-2">
        <div className="gap-2 w-full">
          <Skeleton />
        </div>

        <div className="gap-2 w-full">
          <Skeleton />
        </div>

        <div className="gap-2 w-full">
          <Skeleton />
        </div>
      </div>

      <div className="gap-2 w-full">
        <Skeleton />
      </div>
    </>
  );
}
