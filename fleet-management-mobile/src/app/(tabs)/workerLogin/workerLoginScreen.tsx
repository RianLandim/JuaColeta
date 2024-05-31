import { useNavigation } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import image from "@/assets/bgimage.png";
import logo1 from "@/assets/logos/logo1.png";

export default function WorkerLogin() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      className="h-full w-full items-center justify-center flex space-y-5"
      source={image}
    >
      <View>
        <Image source={logo1} />
      </View>

      <View>
        <Text className="w-90 h-10 text-white text-center">
          Você está entrando no{" "}
          <Text className="text-juaGreen font-semibold">JUAColeta</Text> para
          funcionários!
        </Text>
        <Text className="w-80 h-10 text-white text-center">
          Bem vindo à equipe!
        </Text>
      </View>

      <View>
        <Text className=" text-juaGreen">
          Insira abaixo o código mostrado na tela do administrador
        </Text>
      </View>

      <View>
        <TextInput
          maxLength={6}
          keyboardType="numeric"
          placeholder="Digite aqui"
          placeholderTextColor="hwb(0, 100%, 100%)"
          className="border-solid border-2 border-juaGreen w-80 py-2 rounded-lg text-center text-white mb-10 text-xl"
        />
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text className="text-juaGreen underline rounded-md px-2 text-center text-2xl bg-bgGrayApp ">
          Continuar como usuário
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
