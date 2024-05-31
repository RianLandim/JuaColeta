import { Tabs } from "expo-router";

export default function TabRouterLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Login" }} />
    </Tabs>
  );
}