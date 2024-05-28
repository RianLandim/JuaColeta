import { Tabs } from "expo-router";

export default function TabRouterLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Login" }} />
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="notification" options={{ title: "Notification" }} />
    </Tabs>
  );
}
