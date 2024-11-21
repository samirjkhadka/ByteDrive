import { useAuth } from "@clerk/clerk-expo";
import { Redirect, router } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  // return <Redirect href="./(auth)/welcome" />;
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href="./(root)/(tabs)/home)" />
  }
  else {
    return <Redirect href="./(auth)/sign-in" />
  }
  //return (
 
    // <SafeAreaView className="flex h-full items-center justify-between bg-danger-700">
    //   <TouchableOpacity
    //     className="bg-danger-600"
    //     onPress={() => router.replace("./(auth)/welcome")}
    //   >
    //     <Text>Skip</Text>
    //   </TouchableOpacity>
    // </SafeAreaView>
  //);
};

export default Home;
