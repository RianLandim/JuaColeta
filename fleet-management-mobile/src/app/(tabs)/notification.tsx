import { ImageBackground, View, Image } from "react-native";
import { LayoutProps } from "../../../utils/types/layoutProps";
import Navbar from "../components/navbar";
import CardNotification from "../components/cardNotification";


interface NotificationProps {
  text: string;
  isNew?: boolean
}

// TO DO : QUERY





export default function Notification() {
  return (
    <ImageBackground
      className="flex space-y-10 w-full h-full items-center"
      source={require("../../../assets/bgimage.png")}
    >
      <Navbar />
      <View className="flex items-center space-y-5 h-full">
        <View>
          <CardNotification color="light" text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem." isNew />
        </View>

        <View>
          <CardNotification color="dark" text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised "
          isNew />
        </View>
        <View>
          <CardNotification color="light" text="There are many variations of passages of Lorem Ipsum available, but the majority" />
        </View>
        <View>
          <CardNotification text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" color="dark" />
        </View>
        
      </View>
    </ImageBackground>
  );
}
