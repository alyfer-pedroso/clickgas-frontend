import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs tabBar={() => null}>
        <Tabs.Screen name="index" options={{ headerShown: false }} />
        <Tabs.Screen name="auth" options={{ headerShown: false }} />
      </Tabs>
    </SafeAreaView>
  );
}
