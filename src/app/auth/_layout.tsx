import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="initial/index" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen name="client-registration/index" options={{ headerShown: false, animation: "slide_from_right" }} />
      <Stack.Screen name="supplier-registration/index" options={{ headerShown: false, animation: "slide_from_left" }} />
      <Stack.Screen name="product-linking/index" options={{ headerShown: false, animation: "slide_from_right" }} />
    </Stack>
  );
}
