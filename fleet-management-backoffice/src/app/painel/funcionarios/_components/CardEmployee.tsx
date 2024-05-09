import Image from "next/image";
import { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditEmployeeMutation } from "../../../../hooks/mutations/useEditEmployee";
import { useDeleteEmployeeMutation } from "../../../../hooks/mutations/useDeleteEmployee";

interface CardFuncionario {
  name: string;
  phone: string;
  plate: string;
  idTruck: number;
  id: string;
}

// To do: chamar rota de editar
// To do: chamar rota para listar os ids dos caminhoes

const EditEmployeeFormSchema = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  idTruck: z.number(),
  plate: z.string(),
});

type EditEmployee = z.infer<typeof EditEmployeeFormSchema>;

export default function CardFuncionario({
  name,
  idTruck,
  phone,
  plate,
  id,
}: CardFuncionario) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<EditEmployee>({
    defaultValues: {
      name: name,
      idTruck: idTruck,
      phoneNumber: phone,
      plate: plate,
    },
    resolver: zodResolver(EditEmployeeFormSchema),
  });

  const EmployeeEditMutation = useEditEmployeeMutation();

  const onSubmit: SubmitHandler<EditEmployee> = async (data) => {
    EmployeeEditMutation.mutate({ ...data, phone: data.phoneNumber, id });
    setIsEditing(false);
  };

  const EmployeeDeleteMutation = useDeleteEmployeeMutation();

  const onDelete = async (id: string) => {
    console.log("deletou");
    EmployeeDeleteMutation.mutate(id);
    setIsEditing(false);
  };

  return (
    <form
      className="rounded-lg bg-[#1E1E1E]/75 border-main flex items-center space-x-7 border-2 px-6 py-5 max-h-[169px] min-h-[159px] w-full relative"
      onSubmit={handleSubmit(onSubmit)}
    >
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
                required
                type="text"
                {...register("name")}
                // style={{ width: `${editedName.length}ch` }}
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
              required
              className="rounded-md bg-transparent pl-2 border"
              type="text"
              {...register("phoneNumber")}
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
                required
                className="rounded-md bg-transparent px-2 border w-24"
                type="text"
                {...register("plate")}
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
                {...register("idTruck")}
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
          <div className="flex absolute bottom-6 right-10 space-x-2">
            <button
              onClick={() => {
                onDelete;
              }}
              className="px-3 py-1 rounded-md hover:font-medium border hover:border-none hover:bg-red-500 text-red-500 hover:text-black"
            >
              Deletar
            </button>
            <button
              className="px-3 py-1 border rounded-md hover:bg-white hover:text-black"
              type="submit"
            >
              Salvar
            </button>
          </div>
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
    </form>
  );
}
