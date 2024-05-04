"use client";

import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

interface ChangeCompanyName {
  companyName: string;
}

const changeCompanyNameSchema = z.object({
  name: z.string().min(1, "O nome da empresa precisa ser preenchido"),
});

type ChangeCompanyNameProps = z.infer<typeof changeCompanyNameSchema>;

export default function ChangeCompanyName({ companyName }: ChangeCompanyName) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeCompanyNameProps>({
    resolver: zodResolver(changeCompanyNameSchema),
  });

  const onSubmit: SubmitHandler<ChangeCompanyNameProps> = (data) => {
    console.log("Nome da empresa:", data.name);
  };

  return (
    <main className="bg-[#18101A]/60 border-2 border-[#8CC63F] py-[9%] px-[8%] rounded-xl text-main">
      <h1 className="font-semibold text-3xl text-center">Empresa</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-40 mt-5">
          <Input
            className="placeholder:text-main border-main rounded-[10px] bg-transparent w-80"
            placeholder={`Empresa ${companyName}`}
            type="text"
            {...register("name")}
          />
          {errors.name && (
            <label htmlFor="name" className="Text-base font-bold text-red-700">
              {errors.name.message}
            </label>
          )}
        </div>

        <Button className="bg-main rounded-full text-black font-medium w-full hover:bg-[#39B54A]">
          Salvar
        </Button>
      </form>
    </main>
  );
}
