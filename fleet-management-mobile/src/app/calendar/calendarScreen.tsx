import { Image, ImageBackground, Text, View } from "react-native";
import Navbar from "../_components/navbar";
import ActionButton from "../_components/actionButton";
import { TruckTick } from "iconsax-react-native";

//TO DO: Lógica ainda não implementada, tem que ver com o backend
export default function Timer() {
  return (
    <ImageBackground
      className="h-full w-full items-center justify-center flex space-y-5"
      source={require("../../../assets/bgimage.png")}
    >
      <View className="absolute left-0 top-0">
        <Navbar />
      </View>
      <Image
        source={require("../../../assets/Fotos/Garis.jpg")}
        className="h-56 w-96 rounded-lg "
      />
      <Text className="text-white w-80 text-center text-xl">
        Quando que caminhão de coleta coletiva passará em minha rua?
      </Text>
      <Text className="text-juaGreen">
        Fique atento para não perder o dia da coleta!
      </Text>

      <View className="h-24 px-3 border-juaGreen border-2">
        <View className="flex flex-row py-2 border-juaGreen border-b-2 ">
          <Text className="text-juaDGreen text-lg px-2">DOM</Text>
          <Text className="text-juaGreen text-lg px-2">SEG</Text>
          <Text className="text-juaDGreen text-lg px-2">TER</Text>
          <Text className="text-juaGreen text-lg px-2">QUA</Text>
          <Text className="text-juaDGreen text-lg px-2">QUI</Text>
          <Text className="text-juaGreen text-lg px-2">SEX</Text>
          <Text className="text-juaDGreen text-lg px-2">SAB</Text>
        </View>
        <View className="flex flex-row mt-2 mb">
          <Text className="text-juaDGreen text-lg px-8">-</Text>
          <TruckTick size="28" color="#8CC63F" />
          <Text className="text-juaDGreen text-lg px-8">-</Text>
          <TruckTick size="28" color="#8CC63F" />
          <Text className="text-juaDGreen text-lg px-8">-</Text>
          <TruckTick size="28" color="#8CC63F" />
          <Text className="text-juaDGreen text-lg px-8">-</Text>
        </View>
      </View>

      <View className="border-juaGreen border-2 flex flex-row py-2 px-5 border-dotted break-words w-56 items-center bg-black/50">
        <TruckTick size="28" color="#8CC63F" />
        <Text className="text-juaGreen px-2 text-center">
          Este desenho indica os dias que o caminhão estará passando em sua rua!
        </Text>
      </View>

      <ActionButton />
    </ImageBackground>
  );
}
