import { Tabs } from "expo-router";

export default function TabRouterLayout() {
  return (
    <Tabs screenOptions={{headerShown: false,}}>
      <Tabs.Screen name="login" options={{ title: "Login" }} />
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="notification" options={{ title: "Notification" }} />
    </Tabs>
  );
}
