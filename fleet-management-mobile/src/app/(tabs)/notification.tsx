import { View } from "react-native";
import { LayoutProps } from "../../../utils/types/layoutProps";

export const metadata = {
  title: "Painel",
};

export default function Notification({ children }: LayoutProps) {
  return (
    <View className="w-full h-screen bg-backgroundApp">
      <View className=" flex flex-row relative z-10 ">
        
          {children}
        
      </View>
    </View>
  );
}
