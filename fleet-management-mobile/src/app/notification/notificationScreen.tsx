import { ImageBackground, View } from "react-native";
import Navbar from "../_components/navbar";
import CardNotification from "../_components/cardNotification";
// import { useNotificationList } from "../../../hooks/queries/useNotificationList";
import ActionButton from "../_components/actionButton";

interface NotificationProps {
  id: number;
  text: string;
  isNew?: boolean;
}
// const NotificationQuery = useNotificationList();

// TO DO: match render for return
export default function Notification() {
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
      source={require("../../../assets/bgimage.png")}
    >
      <Navbar />
      {/* {notifications.map((notification, index) => (
          <View key={index}>
            <CardNotification
              color={notification.isNew ? 'light' : 'dark'}
              text={notification.text}
              isNew={notification.isNew}
            />
          </View>
        ))} */}
      {/* <View className="flex items-center space-y-5 h-full">
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
      </View> */}
      <ActionButton />
    </ImageBackground>
  );
}
