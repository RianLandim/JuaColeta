import { View, Image } from "react-native";
import image  from "@/assets/logos/logo2.png"

export default function Navbar() {
  return (
    <View className="h-16 bg-[#1E1E1E] w-full justify-between px-3 items-center flex flex-row">
      <Image
        source={image}
        className="ml-3"
      />
      <Image source={require("../../../assets/Buttons/menuBurguer.png")} />
    </View>
  );
}
