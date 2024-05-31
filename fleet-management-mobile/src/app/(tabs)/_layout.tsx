import { Tabs } from "expo-router";

export default function TabRouterLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="adress/adressScreen" />
      <Tabs.Screen name="home/homeScreen" />
      <Tabs.Screen name="calendar/calendarScreen" />
      <Tabs.Screen name="notification/notificationScreen" />
      <Tabs.Screen name="workerLogin/workerLoginScreen" />
      <Tabs.Screen name="timer/timerScreen" />
    </Tabs>
  );
}
