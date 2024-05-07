import { ImageBackground, View, Image } from "react-native";
import { LayoutProps } from "../../../utils/types/layoutProps";
import Navbar from "../components/navbar";



export default function Home() {
  return (
    <ImageBackground className="w-full h-full"
    source={require("../../../assets/bgimage.png")}>
      <Navbar />
      <Image source={require("../../../assets/Mapa.jpg")}/>

    </ImageBackground>
  );
}
