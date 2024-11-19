import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const Onboarding = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-danger-700">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-in");
        }}
      >
        <Text>Welcome</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding;
