import { ImageBackground, View, Image } from "react-native";
import { LayoutProps } from "../../../utils/types/layoutProps";



export default function Home() {
  return (
    <ImageBackground className="w-full h-full"
    source={require("../../../assets/bgimage.png")}>
      <View className="bg-green-500 h-16 w-full">
        <Image source={require("../../../assets/logos/logo2.png")}/>

      </View>
      <Image source={require("../../../assets/Mapa.jpg")}/>

    </ImageBackground>
  );
}
