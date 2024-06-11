import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Tabs } from "expo-router";
import { AuthProvider } from "../../../utils/context/AuthContext";

const queryClient = new QueryClient();

export default function TabRouterLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        >
          <Tabs.Screen name="index" />
          <Tabs.Screen name="adress/adressScreen" />
          <Tabs.Screen name="home/index" />
          <Tabs.Screen name="calendar/calendarScreen" />
          <Tabs.Screen name="notification/notificationScreen" />
          <Tabs.Screen name="workerLogin/workerLoginScreen" />
          <Tabs.Screen name="timer/timerScreen" />
          <Tabs.Screen name="employeeNotification/index" />
        </Tabs>
      </AuthProvider>
    </QueryClientProvider>
  );
}
