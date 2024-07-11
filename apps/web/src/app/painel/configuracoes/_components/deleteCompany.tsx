"use client";

import Image from "next/image";
import { Button } from "./button";

interface DeleteCompanyProps {
  closeModal: () => void;
}

const DeleteCompany: React.FC<DeleteCompanyProps> = ({ closeModal }) => {
  return (
    <main className="bg-[#073A1F] border-4 rounded-xl border-[#8CC63F] pb-[4%] px-[3%] text-main text-center">
      <div className="flex mt-[7%] pb-14 mr-52">
        <button onClick={closeModal}>
          <Image
            src="/settingsIcons/arrowBack.svg"
            alt="Seta voltar"
            height={80}
            width={35}
          />
        </button>
        <h1 className="font-semibold text-3xl ml-44">Deletar empresa</h1>
      </div>

      <div>
        <div className="mb-20">
          <p className="font-bold mb-4">
            Tem certeza que deseja deletar sua empresa ?
          </p>
          <p className="font-light">
            Isso implicará a exclusão de todos os seus dados,
            <br /> motoristas e caminhões já registrados.
          </p>
        </div>

        <Button className="bg-[#CC3030] rounded-full text-black font-medium text-xl w-[60%] hover:bg-[#A80C0C] hover:font-extrabold">
          Deletar
        </Button>
      </div>
    </main>
  );
};

export default DeleteCompany;
