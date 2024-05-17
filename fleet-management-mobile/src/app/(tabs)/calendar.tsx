import { ImageBackground, Text } from "react-native";
import Navbar from "../_components/navbar";
import ActionButton from "../_components/actionButton";

export default function Calendar() {
  return (
    <ImageBackground
      className="h-full w-full items-center justify-center flex space-y-5"
      source={require("../../../assets/bgimage.png")}
    >
      <Navbar />
      <Text className="text-white ">
        Quais dias o caminhão de coleta coletiva passará em minha rua?
      </Text>
      <Text className="text-juaGreen">
        Fique atento para não perder o dia da coleta!
      </Text>
      <ActionButton />
    </ImageBackground>
  );
}
