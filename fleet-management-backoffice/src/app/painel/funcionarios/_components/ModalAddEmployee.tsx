import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const AddEmployeeFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório!"),
  phoneNumber: z.string().min(1, "Número de telefone obragatório!"),
});

type AddEmployee = z.infer<typeof AddEmployeeFormSchema>;

interface InterfaceModalAddEmployee {
  closeModal: () => void;
}

export default function ModalAddEmployee({
  closeModal,
}: InterfaceModalAddEmployee) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddEmployee>({ resolver: zodResolver(AddEmployeeFormSchema) });

  return (
    <div
      className="w-2/3 h-1/2 bg-backgroundApp border-main 
    border-2 rounded-md text-main py-5 px-3 flex flex-col space-y-3
    items-center"
    >
      <div className="flex items-center justify-between w-full">
        <Button variant={"ghost"} onClick={closeModal}>
          <Image src={"/arrowBack.svg"} alt="" height={38} width={38} />
        </Button>

        <h1 className="mr-20 text-2xl">Adicionando Funcionário</h1>
      </div>

      <div className="flex space-x-11  ">
        <div className="py-8 bg-[#D9D9D9] px-7 rounded-lg">
          <Image
            alt=""
            src={"/iconAddProfilePhoto.svg"}
            height={68}
            width={68}
          />
        </div>
        <div className="flex flex-col space-y-6">
          <Input
            className="placeholder:text-main border border-main rounded-[50px]
        bg-transparent"
            placeholder="E-mail"
            type="email"
            {...register("name")}
          />
          {errors.name && (
            <label className="self-start text-base text-red-700">
              {errors.name.message}
            </label>
          )}
          <Input
            className="placeholder:text-main border border-main rounded-[50px]
        bg-transparent"
            placeholder="E-mail"
            type="email"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <label className="self-start text-base text-red-700">
              {errors.phoneNumber.message}
            </label>
          )}
        </div>
      </div>
    </div>
  );
}
