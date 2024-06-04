"use client";

import Image from "next/image";
import Link from "next/link";
import DeleteCompany from "./_components/deleteCompany";
import { useState } from "react";

interface Settings {
  company: string;
  email: string;
}

export default function Settings({ email, company }: Settings) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <main className="bg-[#181D1A]/60 border-2 border-[#8CC63F] pb-[18%] px-[7%] rounded-xl">
      <div className="text-main text-xl font-normal pt-[14%] w-96">
        <Link href="/mudarNomeEmpresa">
          <div className="hover:cursor-pointer hover:text-[#39B54A] hover:underline flex justify-between items-center">
            <div>
              <p>Empresa</p>
              <p className="font-extralight">{company}</p>
            </div>
            <Image
              src="/settingsIcons/arrowIcon.svg"
              alt="Seta"
              width={20}
              height={20}
              className="hover:filter hover:brightness-125"
            />
          </div>
        </Link>
        <hr className="my-4 border-main" />

        <Link href="/mudarEmail">
          <div className="hover:cursor-pointer hover:text-[#39B54A] hover:underline flex justify-between items-center">
            <div>
              <p>E-mail</p>
              <p className="font-extralight">{email}</p>
            </div>
            <Image
              src="/settingsIcons/arrowIcon.svg"
              alt="Seta"
              width={20}
              height={20}
              className="hover:filter hover:brightness-125"
            />
          </div>
        </Link>
        <hr className="my-4 border-main" />

        <Link href="/mudarSenha">
          <div className="hover:cursor-pointer hover:text-[#39B54A] hover:underline flex justify-between items-center">
            <p>Senha</p>
            <Image
              src="/settingsIcons/arrowIcon.svg"
              alt="Seta"
              width={20}
              height={20}
              className="hover:filter hover:brightness-125"
            />
          </div>
        </Link>
        <hr className="my-4 border-main" />

        <div
          className="text-[#CC3030] hover:cursor-pointer hover:font-extrabold hover:underline"
          onClick={openDeleteModal}
        >
          <p>Deletar conta</p>
        </div>

        {isDeleteModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center">
            <DeleteCompany closeModal={closeDeleteModal} />
          </div>
        )}
      </div>
    </main>
  );
}
