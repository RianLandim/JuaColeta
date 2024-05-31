import { ImageBackground, Text, View } from "react-native";
import Navbar from "../_components/navbar";
import ActionButton from "../_components/actionButton";
import { Watch } from "iconsax-react-native";

//TO DO: fazer a lógica envolvendo o cálculo da previsão do caminhão, tem que ver isso com o back das rotas dos caminhões
export default function Timer() {
  return (
    <ImageBackground
      className="h-full w-full items-center justify-center flex space-y-5"
      source={require("../../../assets/bgimage.png")}
    >
      <View className="absolute left-0 top-0">
        <Navbar />
      </View>

      <Text className="text-white w-80 text-center text-xl">
        Previsão do horário
      </Text>
      <Text className="text-juaGreen">
        A previsão do caminhão passar em sua rua hoje é por volta de:
      </Text>
      <View className="flex flex-row">
        <Watch size="32" color="#8CC63F" />
        <Text className="text-juaGreen text-2xl mx-2">17:00</Text>
        <Watch size="32" color="#8CC63F" />
      </View>

      <Text className="mtop-10 bg-juaGreen font-semibold px-5 py-3 rounded-lg text-center">
        Ufa! Parece que nenhum imprevisto foi registrado em sua rua!
      </Text>

      <Text className="text-juaGreen text-center px-10">
        Coloque o lixo para fora quando o caminhão estiver próximo de sua
        residência!
      </Text>
      <ActionButton />
    </ImageBackground>
  );
}
