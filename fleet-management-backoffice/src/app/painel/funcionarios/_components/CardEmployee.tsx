import Image from "next/image";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";

interface CardFuncionario {
  name: string;
  phone: string;
  plate: string;
  idTruck: number;
}

// To do: chamar rota de editar
// To do: chamar rota para listar os ids dos caminhoes

export default function CardFuncionario({
  name,
  idTruck,
  phone,
  plate,
}: CardFuncionario) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedPhone, setEditedPhone] = useState(phone);
  const [editedPlate, setEditedPlate] = useState(plate);
  // const [editedIdTruck, setEditedIdTruck] = useState(idTruck);

  const handleSave = () => {
    // Implementar lógica de salvar aqui
    setIsEditing(false);
  };

  return (
    <div className="rounded-lg bg-[#1E1E1E]/75 border-main flex items-center space-x-7 border-2 px-6 py-5 max-h-[169px] w-full relative">
      <div className="py-8 bg-[#D9D9D9] px-7 rounded-lg">
        <Image
          src={"/employee/profileNone.svg"}
          alt=""
          height={42}
          width={42}
        />
      </div>
      <div className="flex flex-col justify-center space-y-3 min-w-[40%] max-w-[80%]">
        <div className="flex items-center justify-between">
          <p>
            Nome:{" "}
            {isEditing ? (
              <input
                className={`rounded-md bg-transparent pl-2 border `}
                // style={{ width: `${editedName.length}ch` }}
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            ) : (
              name
            )}
          </p>
        </div>
        <p>
          Telefone:{" "}
          {isEditing ? (
            <input
              className="rounded-md bg-transparent pl-2 border"
              type="text"
              value={editedPhone}
              // style={{ width: `${editedPhone.length}ch` }}
              onChange={(e) => setEditedPhone(e.target.value)}
            />
          ) : (
            phone
          )}
        </p>
        <div className="flex space-x-4 items-center justify-between ">
          <p>
            Placa:{" "}
            {isEditing ? (
              <input
                className="rounded-md bg-transparent px-2 border w-24 "
                type="text"
                value={editedPlate}
                // style={{ width: `${editedPlate.length}ch` }}
                onChange={(e) => setEditedPlate(e.target.value)}
              />
            ) : (
              plate
            )}
          </p>
          <p>
            ID Caminhão: {/* TO DO: RENDER THE SELECT */}
            {isEditing ? (
              <select
                className=" border-main rounded-[50px] text-gray-900 border px-2 shadow focus:outline-none focus:shadow-outline"
                defaultValue={""}
                // {...register("truck")}
              >
                {/*- Vão ser os IDs dos caminhões retornados do BANCO DE DADOS */}
                <option value="" disabled>
                  Selecione...
                </option>
                {/* {TruckId.data !== null &&
              TruckId.data.map((TruckId, index) => (
                <option key={index} value={TruckId.idTruck}>
                  {TruckId.idTruck}
                </option>
              ))} */}
              </select>
            ) : (
              idTruck
            )}
          </p>
        </div>
        {isEditing && (
          <button
            onClick={handleSave}
            className="px-3 py-1 border rounded-md self-end hover:bg-white hover:text-black absolute bottom-6 right-10"
          >
            Salvar
          </button>
        )}
      </div>
      <Image
        onClick={() => setIsEditing(!isEditing)}
        src={"/employee/pencilEdit.svg"}
        height={20}
        width={20}
        alt=""
        className="hover:cursor-pointer absolute right-10 top-8  hover:contrast-200 hover:h-7 hover:w-7 ease-in-out"
      />
    </div>
  );
}
