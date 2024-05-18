import {
  ImageBackground,
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/navbar";
import EmployeeCardNotification from "./_components/cardNotification";
import { useState } from "react";

interface BackgroundColorInterface {
  color: "red" | "green" | "yellow";
}

export default function EmployeeNotificationScreen() {
  const [selectedColor, setSelectedColor] = useState<
    BackgroundColorInterface["color"] | null
  >(null);
  console.log(selectedColor);

  // const handleSubmit = async () => {
  //   if (!selectedColor) {
  //     Alert.alert("Por favor, selecione um tipo de aviso.");
  //     return;
  //   }

  //   try {
  //     console.log(data)

  //     Alert.alert("Aviso enviado com sucesso!");
  //   } catch (error) {
  //     Alert.alert(console.log("Erro: ", error));
  //   }
  // };

  return (
    <ImageBackground
      className="flex space-y-10 w-full h-full items-center"
      source={require("../../../assets/bgimage.png")}
    >
      <Navbar />
      <View className="flex items-center space-y-5">
        <Text className="text-LightGreenApp text-xl text-center">
          Algum Imprevisto aconteceu durante o trajeto?
        </Text>

        <TouchableOpacity onPress={() => setSelectedColor("green")}>
          <EmployeeCardNotification color="green" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedColor("yellow")}>
          <EmployeeCardNotification color="yellow" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedColor("red")}>
          <EmployeeCardNotification color="red" />
        </TouchableOpacity>
      </View>

      <View className="py-3 px-3 flex justify-center items-center bg-black border-dotted border-2 border-LightGreenApp rounded-lg w-[85%]">
        <Text className={`text-LightGreenApp text-wrap`}>
          Em caso de emergência, <Text className="font-bold">nunca</Text> demore
          em acionar ajuda segurança sempre está em primeiro lugar
        </Text>
      </View>

      {selectedColor && (
        <TouchableOpacity className="bg-LightGreenApp px-20 py-3 rounded-lg text-center">
          <Text className="text-lg font-semibold">Enviar</Text>
        </TouchableOpacity>
      )}
    </ImageBackground>
  );
}
