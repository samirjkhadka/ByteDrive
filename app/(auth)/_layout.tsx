import "../../global.css";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";

import { Stack } from "expo-router";

import "react-native-reanimated";

const Layout = () => {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
