import { Redirect, router } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  // return <Redirect href="./(auth)/welcome" />;

  return <Redirect href="./(auth)/welcome" />
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
