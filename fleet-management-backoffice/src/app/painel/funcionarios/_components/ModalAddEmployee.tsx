import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { z } from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import DashboardLoading, { DashboardError } from "../../loading";
import { match } from "ts-pattern";
import { useTruckIdList } from "../../../../hooks/queries/useTruckId";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const AddEmployeeFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório!"),
  phoneNumber: z.string().min(1, "Número de telefone obragatório!"),
  truck: z.string().min(1, "Selecione o ID do caminhão!"),
  photo: z.custom<File>(),
  // .refine((file) => file === null, "Selecione uma foto")
  // .refine(
  //   (file) => file?.size <= MAX_FILE_SIZE,
  //   `Tamanho máximo para a imagem é 5MB.`
  // )
  // .refine(
  //   (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
  //   "Somente .jpg, .jpeg, .png são os formatos aceitos."
  // ),
});

type AddEmployee = z.infer<typeof AddEmployeeFormSchema>;

interface InterfaceModalAddEmployee {
  closeModal: () => void;
}

export interface VehicleProps {
  id: number;
}

const onSubmit: SubmitHandler<AddEmployee> = async (data) => {
  console.log(data);
  // try {
  //   await fetch()
  // } catch(error){
  //   console.error(error)
  // }
};

export default function ModalAddEmployee({
  closeModal,
}: InterfaceModalAddEmployee) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<AddEmployee>({ resolver: zodResolver(AddEmployeeFormSchema) });

  const TuckIdList = useTruckIdList();

  return (
    <>
      {match(TuckIdList)
        .with({ isPending: true }, () => <DashboardLoading />)
        .with({ isError: true }, () => (
          <DashboardError errorMessage={TuckIdList.error?.message} />
        ))
        .otherwise((TruckId) => (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-3/5 max-h-[600px] max-w-[930px] bg-backgroundApp border-main 
    border-2 rounded-md text-main py-10 px-3 flex flex-col space-y-11 
    items-center"
          >
            <div className="flex items-center justify-between w-full">
              <Button
                className="rounded-full hover:bg-transparent"
                variant={"ghost"}
                onClick={closeModal}
              >
                <Image src={"/arrowBack.svg"} alt="" height={38} width={38} />
              </Button>

              <h1 className="mr-20 text-[38px]">Adicionando Funcionário</h1>
            </div>

            <div className="flex-col w-full justify-center items-center text-xl space-y-14">
              <div className="flex space-x-12 justify-center">
                {/* IMAGE INPUT */}
                <div className="flex-col">
                  <label
                    htmlFor="fileInput"
                    className="w-[192px] h-[240px] bg-[#D9D9D9] rounded-lg flex items-center justify-center relative"
                  >
                    {selectedImage ? (
                      <Image
                        src={selectedImage}
                        alt="Pré-visualização da Foto"
                        width={10000}
                        height={10000}
                      />
                    ) : (
                      <Image
                        src={"/iconAddProfilePhoto.svg"}
                        alt="Pré-visualização da Foto"
                        width={100}
                        height={100}
                      />
                    )}

                    {/* Campo de entrada de arquivo invisível */}
                    <Controller
                      control={control}
                      name="photo"
                      render={({ field: { onChange } }) => (
                        <Input
                          type="file"
                          accept="image/*"
                          {...register("photo")}
                          className="absolute opacity-0 w-full h-full z-10 cursor-pointer"
                          onChange={({ target }) => {
                            const file = target.files?.[0];
                            if (file) {
                              setSelectedImage(URL.createObjectURL(file));
                            }
                            onChange(target.files?.[0]);
                          }}
                        />
                      )}
                    />
                  </label>

                  {errors.photo && typeof errors.photo.message === "string" && (
                    <p className="pt-3 text-center text-base text-red-700 font-medium">
                      {errors.photo.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col space-y-6 w-2/5 text-xl">
                  <div>
                    <Input
                      className="border border-main rounded-[50px] text-xl"
                      placeholder="Nome"
                      type="text"
                      {...register("name")}
                    />
                    {errors.name && (
                      <label className="self-start text-base text-red-700 font-medium">
                        {errors.name.message}
                      </label>
                    )}
                  </div>
                  <div>
                    <Input
                      className="border border-main rounded-[50px] w-full text-xl"
                      placeholder="Número do Celular"
                      type="text"
                      {...register("phoneNumber")}
                    />
                    {errors.phoneNumber && (
                      <label className="self-start text-base text-red-700 font-medium">
                        {errors.phoneNumber.message}
                      </label>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <div className="flex-col ">
                      <div className="flex space-x-4">
                        <p>Caminhão: </p>
                        <select
                          className=" border-main rounded-[50px] text-gray-900 border px-4 shadow focus:outline-none focus:shadow-outline
                    w-full pl-2 text-xl"
                          defaultValue={""}
                          {...register("truck")}
                        >
                          {/*- Vão ser os IDs dos caminhões retornados do BANCO DE DADOS */}
                          <option value="" disabled>
                            Selecione...
                          </option>
                          {TruckId.data !== null &&
                            TruckId.data.map((TruckId, index) => (
                              <option key={index} value={TruckId.idTruck}>
                                {TruckId.idTruck}
                              </option>
                            ))}
                        </select>
                      </div>

                      {errors.truck && (
                        <label className="self-start text-base text-red-700 font-medium">
                          {errors.truck.message}
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pr-5 justify-end">
                <Button
                  type="submit"
                  className="bg-main hover:bg-main
        rounded-full w-1/2 text-black shadow-CustomButton text-xl font-normal"
                >
                  Confirmar Dados
                </Button>
              </div>
            </div>
          </form>
        ))}
    </>
  );
}
