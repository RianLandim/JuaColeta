"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function DeleteCompany() {
  return (
    <main className="bg-[#073A1F] border-2 border-[#8CC63F] text-main pt-[2.5%] items-center">
      <div className="flex justify-between">
        <Image
          src="/addIcon.svg"
          alt="addIcon"
          height={30}
          width={30}
          className="mr-3"
        />
        <h1 className="font-semibold text-3xl">Deletar empresa</h1>
      </div>
      <div>
        <p className="font-bold">
          Tem certeza que deseja deletar sua empresa ?
        </p>
        <p className="font-light">
          Isso implicará a exclusão de todos os seus dados,
          <br /> motoristas e caminhões já registrados.
        </p>
      </div>

      <Button className="bg-[#CC3030] rounded-full text-black font-medium w-full">
        Deletar
      </Button>
    </main>
  );
}
