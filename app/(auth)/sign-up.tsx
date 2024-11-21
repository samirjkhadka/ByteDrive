import { icons, images } from "@/constants";
import { Image, ScrollView, View, Text } from "react-native";

import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/oAuth";

const signUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onSignUpPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View>
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
      </View>
      <View className="p-5">
        <InputField
          label="Name"
          icon={icons.person}
          placeholder="Enter Your Name"
          value={form.name}
          onChangeText={(value) => setForm({ ...form, name: value })}
        />
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
          title="Sign Up"
          className="mt-6"
          onPress={onSignUpPress}
        />
         {/* oAuth section */}
        <OAuth />
        <Link
          href="/sign-in"
          className="text-lg text-center text-general-200 mt-10"
        >
          <Text className="">Already have an account ? </Text>
          <Text className="text-primary-500">Login</Text>
        </Link>
      </View>

     
    </ScrollView>
  );
};

export default signUp;
