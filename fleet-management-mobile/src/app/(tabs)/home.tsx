import { ImageBackground, View, Image } from "react-native";
// import { LayoutProps } from "../../../utils/types/layoutProps";
import Navbar from "../_components/navbar";
import {
  requestBackgroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
} from "expo-location";
import { useEffect, useState } from "react";

export default function Home() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  async function requesLocationdPermissions() {
    const { granted } = await requestBackgroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requesLocationdPermissions();
  }, []);
  
  return (
    <ImageBackground
      className="w-full h-full"
      source={require("../../../assets/bgimage.png")}
    >
      <Navbar />
      <Image source={require("../../../assets/Mapa.jpg")} />
    </ImageBackground>
  );
}
