import { icons, images } from "@/constants";
import { Image, ScrollView, View, Text } from "react-native";

import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/oAuth";

const signIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSignInPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View>
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Namaste and Welcome 🙏
          </Text>
        </View>
      </View>
      <View className="p-5">
        <InputField
          label="Email"
          icon={icons.email}
          placeholder="Enter Your Email"
          value={form.email}
          textContentType="emailAddress"
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <InputField
          label="Password"
          icon={icons.lock}
          placeholder="Enter Your Password"
          value={form.password}
          textContentType="password"
          secureTextEntry={true}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />
        <CustomButton
          title="Sign In"
          className="mt-6"
          onPress={onSignInPress}
        />
        {/* oAuth section */}
        <OAuth />
        <Link
          href="/sign-up"
          className="text-lg text-center text-general-200 mt-10"
        >
          <Text className="">Don't have an account ? </Text>
          <Text className="text-primary-500">Register</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default signIn;
