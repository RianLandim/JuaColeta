import { ImageBackground, View, TouchableWithoutFeedback } from "react-native";
import Navbar from "../../_components/navbar";
import CardNotification from "../../_components/cardNotification";
// import { useNotificationList } from "../../../hooks/queries/useNotificationList";
import ActionButton from "../../_components/actionButton";
import image from "@/assets/bgimage.png";
import { ArrowCircleLeft } from "iconsax-react-native";
import { useNavigation } from "expo-router";

interface NotificationProps {
  id: number;
  text: string;
  isNew?: boolean;
}
// const NotificationQuery = useNotificationList();

// TO DO: match render for return
export default function Notification() {
  const navigation = useNavigation();

  // const { data: notifications, isLoading, isError } = useNotificationList();

  // if (isLoading) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <View>
  //       <Text>Error fetching notifications</Text>
  //     </View>
  //   );
  // }

  return (
    <ImageBackground
      className="flex space-y-10 w-full h-full items-center"
      source={image}
    >
      <Navbar />
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <ArrowCircleLeft
          className="bg-LightGrayApp rounded-full px-2 py-2 shadow-md self-end mr-4"
          size={46}
          color="#000"
        />
      </TouchableWithoutFeedback>

      {/* {notifications.map((notification, index) => (
          <View key={index}>
            <CardNotification
              color={notification.isNew ? 'light' : 'dark'}
              text={notification.text}
              isNew={notification.isNew}
            />
          </View>
        ))} */}

      <View className="flex items-center space-y-5">
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
    </ImageBackground>
  );
}
