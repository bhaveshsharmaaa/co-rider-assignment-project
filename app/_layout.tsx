import { useFonts } from "expo-font";
import { Stack } from "expo-router";
export default function RootLayout() {
  useFonts({
    inter: require("./../assets/fonts/Inter_24pt-Regular.ttf"),
    "inter-bold": require("./../assets/fonts/Inter_24pt-Bold.ttf"),
    "inter-semibold": require("./../assets/fonts/Inter_24pt-SemiBold.ttf"),
    "inter-light": require("./../assets/fonts/Inter_24pt-Light.ttf"),
    "inter-extrabold": require("./../assets/fonts/Inter_24pt-ExtraBold.ttf"),
    "inter-medium": require("./../assets/fonts/Inter_24pt-Medium.ttf"),
  });
  return <Stack screenOptions={{ headerShown: false }} />;
}
