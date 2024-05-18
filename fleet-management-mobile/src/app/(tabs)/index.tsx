import { Link } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  return (
    <ImageBackground
      className="h-full w-full items-center justify-center flex space-y-5"
      source={require("../../../assets/bgimage.png")}
    >
      <View>
        <Image source={require("../../../assets/logos/logo1.png")} />
      </View>

      <View>
        <Text className="w-80 h-10 text-white text-center">
          Bem Vindo ao Aplicativo oficial da{" "}
          <Text className="text-LightGreenApp font-semibold">JUAColeta</Text>!
        </Text>
        <Text className="w-80 h-10 text-white text-center">
          O Futuro da coleta coletiva em suas mãos
        </Text>
      </View>

      <Link href="/home" asChild>
        <TouchableOpacity className="bg-LightGreenApp px-20 py-3 rounded-lg text-center">
          <Text className="text-lg font-semibold">Entrar</Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity>
        <Text className="text-LightGreenApp underline font-semibol text-center">
          Trabalha usando o app?
        </Text>
        <Text className="text-LightGreenApp underline font-semibold text-center">
          Cadastre-se Aqui!
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
