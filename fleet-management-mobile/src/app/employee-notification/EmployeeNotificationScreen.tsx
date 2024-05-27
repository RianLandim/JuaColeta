import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Navbar from "../components/navbar";
import EmployeeCardNotification from "./_components/cardNotification";
import { UseSendNotification } from "../../../hooks/mutation/useSendNotification";
import QueryClientProviderComponent from "./_components/queryClientProvider";

interface NotificationType {
  type: "red" | "green" | "yellow";
}

export default function EmployeeNotificationScreen() {
  const [notificationType, setNotificationType] = useState<
    NotificationType["type"] | null
  >(null);
  const sendNotification = UseSendNotification();

  const handleSubmit = async () => {
    if (!notificationType) {
      Alert.alert("Por favor, selecione um tipo de aviso.");
      return;
    }

    try {
      const data = { type: notificationType };
      console.log(data);
      sendNotification.mutate(data);
      Alert.alert("Aviso enviado com sucesso!");
    } catch (error) {
      Alert.alert("Erro: erro ao enviar o aviso. Tente novamente");
    }
  };

  return (
    <QueryClientProviderComponent>
      <ImageBackground
        className="flex space-y-10 w-full h-full items-center"
        source={require("../../../assets/bgimage.png")}
      >
        <Navbar />
        <View className="flex items-center space-y-5">
          <Text className="text-LightGreenApp text-xl text-center">
            Algum Imprevisto aconteceu durante o trajeto?
          </Text>

          <TouchableOpacity onPress={() => setNotificationType("green")}>
            <EmployeeCardNotification color="green" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setNotificationType("yellow")}>
            <EmployeeCardNotification color="yellow" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setNotificationType("red")}>
            <EmployeeCardNotification color="red" />
          </TouchableOpacity>
        </View>

        <View className="py-3 px-3 flex justify-center items-center bg-black border-dotted border-2 border-LightGreenApp rounded-lg w-[85%]">
          <Text className={`text-LightGreenApp text-wrap`}>
            Em caso de emergência, <Text className="font-bold">nunca</Text>{" "}
            demore em acionar ajuda segurança sempre está em primeiro lugar
          </Text>
        </View>

        {notificationType && (
          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-LightGreenApp px-20 py-3 rounded-lg text-center"
          >
            <Text className="text-lg font-semibold">Enviar</Text>
          </TouchableOpacity>
        )}
      </ImageBackground>
    </QueryClientProviderComponent>
  );
}
