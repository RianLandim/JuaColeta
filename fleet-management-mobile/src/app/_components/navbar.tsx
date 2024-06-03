import { View, Image, TouchableWithoutFeedback } from "react-native";
import { Link, useRouter } from "expo-router";

interface NavbarProps {
  isRouteToGoBack?: boolean;
}

export default function Navbar({ isRouteToGoBack }: NavbarProps) {
  const navigation = useRouter();

  return (
    <View className="h-16 bg-[#1E1E1E] w-full justify-between px-3 items-center flex-row">
      <Image source={require("@/assets/logos/logo2.png")} className="ml-3" />

      {isRouteToGoBack ? (
        <TouchableWithoutFeedback onPress={() => navigation.push("home")}>
          <Image source={require("@/assets/Buttons/cancel_exit.png")} />
        </TouchableWithoutFeedback>
      ) : (
        <Link href={"/adress/adressScreen"} asChild>
          <TouchableWithoutFeedback>
            <Image source={require("@/assets/Buttons/menuBurguer.png")} />
          </TouchableWithoutFeedback>
        </Link>
      )}
    </View>
  );
}
