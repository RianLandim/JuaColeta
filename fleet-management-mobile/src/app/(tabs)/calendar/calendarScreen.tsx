import { Image, ImageBackground, Text, View } from "react-native";
import Navbar from "../../_components/navbar";
import ActionButton from "../../_components/actionButton";
import image from "@/assets/bgimage.png"
import gariImage from "@/assets/Fotos/Garis.jpg"

//TO DO: Lógica ainda não implementada, tem que ver com o backend
export default function Timer() {
  return (
    <ImageBackground
      className="h-full w-full items-center justify-center flex space-y-5"
      source={image}
    >
      <View className="absolute left-0 top-0">
        <Navbar />
      </View>
      <Image
        source={gariImage}
        className="h-56 w-96 rounded-lg "
      />
      <Text className="text-white w-80 text-center text-xl">
        Quando que caminhão de coleta coletiva passará em minha rua?
      </Text>
      <Text className="text-juaGreen">
        Fique atento para não perder o dia da coleta!
      </Text>

      <View className="w-96 h-56 border-juaGreen border-2">
        <View className="flex flex-row space-x-5 py-3">
          <Text className="text-juaGreen text-lg"> DOM </Text>
          <Text className="text-juaDGreen text-lg"> SEG </Text>
          <Text className="text-juaGreen text-lg"> TER </Text>
          <Text className="text-juaDGreen text-lg"> QUA </Text>
          <Text className="text-juaGreen text-lg"> QUI </Text>
          <Text className="text-juaDGreen text-lg"> SEX </Text>
          <Text className="text-juaGreen text-lg"> SAB </Text>
        </View>
      </View>
      <ActionButton />
    </ImageBackground>
  );
}
