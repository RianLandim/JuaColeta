import {
  ImageBackground,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { useEffect } from "react";
import Navbar from "../../_components/navbar";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { UseGetAdress } from "../../../../hooks/queries/useGetAdress";
import { UseEditAdressMutation } from "../../../../hooks/mutation/useEditAdress";
import image from "@/assets/bgimage.png"


// const onSubmit: SubmitHandler<editAdressProps> = async (data) => {
//   // EmployeeEditMutation.mutate({ ...data, phone: data.phoneNumber, id });
//   EditAdressMutation
//   console.log(data);
// };

export default function EditAdressScreen() {
  const editAdressFormSchema = z.object({
    street: z.string().min(1),
    neighborhood: z.string().min(1),
    number: z.string().min(1),
  });
  type editAdressProps = z.infer<typeof editAdressFormSchema>;

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<editAdressProps>({
    defaultValues: {
      street: "",
      number: "",
      neighborhood: "",
    },
    resolver: zodResolver(editAdressFormSchema),
  });

  // TO DO: CHAMAR ROTA DE VER ENDEREÇO ATUAL
  const GetAdressQuery = UseGetAdress();

  // TO DO: CHAMAR ROTA DE EDITAR
  const EditAdressMutation = UseEditAdressMutation();

  const onSubmit: SubmitHandler<editAdressProps> = async (data) => {
    // EmployeeEditMutation.mutate({ ...data, phone: data.phoneNumber, id });
    EditAdressMutation;
    console.log(data);
    reset({ ...data });
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ street: "", number: "", neighborhood: "" });
    }
  }, [GetAdressQuery]);

  return (
    <ImageBackground
      className="flex space-y-10 w-full h-full"
      source={image}
    >
      <Navbar isRouteToGoBack />

      <View className="flex h-full w-full px-10 space-y-12">
        <View className="flex flex-col space-y-6">
          <Text className="text-LightGrayApp text-2xl">Endereço</Text>

          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder={"Nome da sua rua"}
                  placeholderTextColor={"#FFF"}
                  className=" text-LightGrayApp border border-LightGrayApp
            h-12 px-4 rounded-md"
                />
              )}
              name="street"
            />
            {errors.street && (
              <Text className="self-start text-base text-red-700">
                {/* {errors.street.message} */}
                Rua precisa ser preenchido.
              </Text>
            )}
          </View>

          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder={"Número da sua casa"}
                  placeholderTextColor={"#FFF"}
                  className=" text-LightGrayApp border border-LightGrayApp h-12 px-4 rounded-md"
                />
              )}
              name="number"
            />
            {errors.number && (
              <Text className="self-start text-base text-red-700">
                {/* {errors.number.message} */}
                Número da residência deve ser preenchido.
              </Text>
            )}
          </View>

          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder={"Nome do seu bairro"}
                  placeholderTextColor={"#FFF"}
                  className=" text-LightGrayApp border border-LightGrayApp h-12 px-4 rounded-md"
                />
              )}
              name="neighborhood"
            />
            {errors.neighborhood && (
              <Text className="self-start text-base text-red-700">
                {/* {errors.neighborhood.message} */}
                Bairro precisa ser preenchido.
              </Text>
            )}
          </View>
        </View>

        <Pressable
          onPress={handleSubmit(onSubmit)}
          className="w-full flex items-center bg-LightGrayApp rounded-full py-2"
        >
          <Text className="text-2xl font-semibold">Salvar</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
