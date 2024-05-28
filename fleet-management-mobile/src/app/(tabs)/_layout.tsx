import { Tabs } from "expo-router";

export default function TabRouterLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Login" }} />
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="notification" options={{ title: "Notification" }} />
      <Tabs.Screen name="workerLogin" options={{ title: "WorkerLogin" }} />
      <Tabs.Screen name="Calendar" options={{ title: "calendar" }} />
      <Tabs.Screen name="timer" options={{ title: "timer" }} />
    </Tabs>
  );
}
