import Image from "next/image";

interface CardFuncionario {
  name: string;
  phone: string;
  plate: string;
  idTruck: number;
}

export default function CardFuncionario({
  name,
  idTruck,
  phone,
  plate,
}: CardFuncionario) {
  return (
    <div
      className="rounded-lg bg-[#1E1E1E]/75 border-main flex 
      items-center space-x-7 border-2 px-6 py-5 max-h-[169px]"
    >
      <div className="py-8 bg-[#D9D9D9] px-7 rounded-lg">
        <Image src={"/profileNone.svg"} alt="" height={42} width={42} />
      </div>
      <div className="flex flex-col space-y-3">
        <p>Nome: {name}</p>
        <p>Telefone: {phone}</p>
        <div className="flex space-x-5">
          <p>Placa: {plate}</p>
          <p>ID Caminhão: {idTruck}</p>
        </div>
      </div>
    </div>
  );
}
