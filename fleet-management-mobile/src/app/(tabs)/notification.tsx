import { ImageBackground, View, Image } from "react-native";
import { LayoutProps } from "../../../utils/types/layoutProps";
import Navbar from "../components/navbar";

export default function Notification() {
  return (
    <ImageBackground
      className="w-full h-full"
      source={require("../../../assets/bgimage.png")}
    >
      <Navbar />
    </ImageBackground>
  );
}
