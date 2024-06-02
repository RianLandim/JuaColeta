import {
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Text,
} from "react-native";
import Navbar from "../../_components/navbar";
import CardNotification from "../../_components/cardNotification";
import image from "@/assets/bgimage.png";
import GoBackButton from "../../_components/goBackButton";
import { UseNotificationList } from "../../../../hooks/queries/useNotificationList";
import { ArrowDown } from "iconsax-react-native";

interface NotificationProps {
  id: number;
  text: string;
  isNew?: boolean;
}

// TO DO: match render for return
export default function Notification() {
  var Animatable = require("react-native-animatable");

  const { data: notifications, isPending, isError } = UseNotificationList();

  if (isPending) {
    return (
      <ImageBackground
        className="animate-pulse flex space-y-5 w-full h-full items-center justify-center"
        source={image}
      >
        <Text className="text-white text-xl">
          Carregando, por favor aguarde.
        </Text>
        <Animatable.View
          animation="flipInX"
          iterationCount={10}
          duration={1100}
        >
          <ArrowDown size="48" color="#fff" />
        </Animatable.View>
      </ImageBackground>
    );
  }

  // if (isError) {
  //   return (
  //     <ImageBackground
  //       className="flex space-y-5 w-full h-full items-center justify-center"
  //       source={image}
  //     >
  //       <Text className="text-white text-xl">Erro!</Text>
  //       <GoBackButton css="mt-5" />
  //     </ImageBackground>
  //   );
  // }

  return (
    <ImageBackground
      className="flex space-y-5 w-full h-full items-center"
      source={image}
    >
      <Navbar />

      {/* <ScrollView className="w-full">
        <View className="flex items-center space-y-5 overflow-scroll pt-2">
          {notifications.map(
            (notification: NotificationProps, index: number) => (
              <View key={index}>
                <CardNotification
                  color={notification.isNew ? "light" : "dark"}
                  text={notification.text}
                  isNew={notification.isNew}
                />
              </View>
            )
          )}
        </View>
      </ScrollView> */}

      {/* Static model bellow */}
      <ScrollView className="w-full">
        <View className="flex items-center space-y-5 overflow-scroll pt-2">
          <View>
            <CardNotification
              color="light"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem."
              isNew
            />
          </View>
          <View>
            <CardNotification
              color="dark"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem."
              isNew
            />
          </View>
          <View>
            <CardNotification
              color="light"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem."
              isNew
            />
          </View>
          <View>
            <CardNotification
              color="dark"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem."
              isNew
            />
          </View>
          <View>
            <CardNotification
              color="light"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem."
              isNew
            />
          </View>
          <View>
            <CardNotification
              color="dark"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem."
              isNew
            />
          </View>
          <View>
            <CardNotification
              color="light"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem."
              isNew
            />
          </View>

          <View>
            <CardNotification
              color="dark"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised "
              isNew
            />
          </View>
          <View>
            <CardNotification
              color="light"
              text="There are many variations of passages of Lorem Ipsum available, but the majority"
            />
          </View>
          <View>
            <CardNotification
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
              color="dark"
            />
          </View>
        </View>
      </ScrollView>

      <GoBackButton css="mb-5 mt-5" />
    </ImageBackground>
  );
}
