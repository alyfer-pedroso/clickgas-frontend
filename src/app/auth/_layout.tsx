import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen name="client-registration/index" options={{ headerShown: false, animation: "slide_from_right" }} />
    </Stack>
  );
}
