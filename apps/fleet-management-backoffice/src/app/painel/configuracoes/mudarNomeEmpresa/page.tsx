"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
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
    <main className="bg-[#18101A]/60 border-2 border-[#8CC63F] pb-[9%] pl-[5%] pr-[7%] pt-[5%] rounded-xl text-main">
      <div className="flex items-center">
        <div className="pr-28">
          <Link href="/configuracoes">
            <Image
              src="/settingsIcons/arrowBack.svg"
              alt="Seta voltar"
              height={80}
              width={35}
            />
          </Link>
        </div>
        <h1 className="font-semibold text-3xl text-center pr-32">Empresa</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="pl-12">
        <div className="pb-28 pt-20">
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

        <Button className="bg-main rounded-full text-black font-medium w-80 text-base hover:bg-[#39B54A]">
          Salvar
        </Button>
      </form>
    </main>
  );
}
