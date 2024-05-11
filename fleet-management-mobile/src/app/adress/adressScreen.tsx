import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Navbar from "../components/navbar";
import { Link } from "expo-router";

export default function AdressScreen() {
  // const route = useRoute();
  // console.log(route.name);
  // const routeToGoBack = route.name

  return (
    <ImageBackground
      className="flex space-y-10 w-full h-full"
      source={require("../../../assets/bgimage.png")}
    >
      <Navbar isRouteToGoBack />

      <View className="flex h-full w-full px-10 space-y-5">
        <Text className="text-LightGrayApp text-2xl">Endereço</Text>

        <View className="flex flex-row items-center space-x-5">
          <Link href={"/adress/editAdressScreen"}>
            <View className="flex items-center flex-row space-x-10">

              <View className="flex flex-col">
                <Text className="text-lg text-LightGrayApp">
                  Rua Avenida Presidente da Ditadura
                </Text>
                <Text className="text-lg text-LightGrayApp">NUmero Xyz</Text>
                <Text className="text-lg text-LightGrayApp">Bairo Fulano</Text>
              </View>

              <Image source={require("@/assets/Buttons/ArrowToRight.png")} />

            </View>
          </Link>
        </View>

        <View className="h-[1px] w-full bg-LightGrayApp"></View>
        <Text className="text-LightGrayApp text-2xl">
          Entrar como funcionário
        </Text>
        {/* <View className="h-[1px] w-full bg-LightGrayApp"></View> */}
      </View>
    </ImageBackground>
  );
}
