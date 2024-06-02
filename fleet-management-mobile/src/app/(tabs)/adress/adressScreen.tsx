import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Navbar from "../../_components/navbar";
import { Link } from "expo-router";
import image from "@/assets/bgimage.png";
import { useAuth } from "../../../../utils/context/AuthContext";

export default function AdressScreen() {
  const { isAdmin, setIsAdmin } = useAuth();

  const handleAcessChange = () => {
    setIsAdmin(false);
    console.log("false--admin--secessful");
  };

  return (
    <ImageBackground className="flex space-y-10 w-full h-full" source={image}>
      <Navbar isRouteToGoBack />

      <View className="flex h-full w-full px-10 space-y-5">
        <Text className="text-LightGreenApp text-2xl">Endereço</Text>

        <View className="flex flex-row items-center space-x-5">
          <Link href={"/adress/editAdressScreen"}>
            <View className="flex items-center flex-row space-x-10">
              <View className="flex flex-col">
                <Text className="text-lg text-LightGreenApp">
                  Rua Avenida Presidente Dutra
                </Text>
                <Text className="text-lg text-LightGreenApp">Numero Xyz</Text>
                <Text className="text-lg text-LightGreenApp">Bairo Centro</Text>
              </View>

              <Image source={require("@/assets/Buttons/ArrowToRight.png")} />
            </View>
          </Link>
        </View>

        <View className="h-[1px] w-full bg-LightGrayApp"></View>

        {isAdmin ? (
          <View>
            <TouchableWithoutFeedback onPress={handleAcessChange}>
              <Text className="text-LightGreenApp text-2xl">
                Sair do modo funcionário
              </Text>
            </TouchableWithoutFeedback>
          </View>
        ) : (
          <Link href={"workerLogin/workerLoginScreen"} asChild>
            <Text className="text-LightGreenApp text-2xl">
              Entrar como funcionário
            </Text>
          </Link>
        )}
      </View>
    </ImageBackground>
  );
}
