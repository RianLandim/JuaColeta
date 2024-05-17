import { ImageBackground, View, Text } from "react-native";
import Navbar from "../components/navbar";
import EmployeeCardNotification from "./_components/cardNotification";

export default function EmployeeNotificationScreen() {
  return (
    <ImageBackground
      className="flex space-y-10 w-full h-full items-center"
      source={require("../../../assets/bgimage.png")}
    >
      <Navbar />
      <View className="flex items-center space-y-5">
        <View>
          <EmployeeCardNotification color="green" />
        </View>

        <View>
          <EmployeeCardNotification color="yellow" />
        </View>
        <View>
          <EmployeeCardNotification color="red" />
        </View>
      </View>

      <View className="py-3 px-3 flex justify-center items-center bg-black border-dotted border-2 border-LightGrayApp rounded-lg w-[85gi%]">
        <Text className={`text-LightGrayApp text-wrap`}>
          Em caso de emergência, nunca demore em acionar ajuda segurança sempre
          está em primeiro lugar
        </Text>
      </View>
    </ImageBackground>
  );
}
