import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { AuthContext } from "../../Provider/AuthProvider";
import RegisterButton from "../../Components/RegisterButton";
import { useState, useContext, useEffect } from "react";
import logo from "../../assets/logo.png";

const RegisterScreen = ({ navigation }) => {
  const userInfo = useContext(AuthContext);
  const { userData, setUserDate } = userInfo;

  const handleRegisterData = (name, value) => {
    setUserDate((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const registerPrint = () => {
    alert("Register Successfully");
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView className="flex-1 p-8 ">
      <View className="mt-14 mx-auto">
        <Image source={logo} className="rounded-lg w-40 h-40"></Image>
      </View>
      <View className="mt-[60px] mx-auto">
        <Text className="text-5xl font-semibold text-orange-400">Register</Text>
      </View>
      <View className="mt-4">
        <TextInput
          className=" border-2  w-72 p-2 h-12 rounded-xl border-orange-400 text-lg text-neutral"
          onChangeText={(value) => handleRegisterData("Name", value)}
          placeholder="Full Name"
        ></TextInput>
        <TextInput
          className=" mt-3 border-2  w-72 p-2 h-12 rounded-xl border-orange-400 text-lg text-neutral"
          onChangeText={(value) => handleRegisterData("phoneNumber", value)}
          placeholder="PHONE NUMBER"
          keyboardType="numeric"
        ></TextInput>
        <TextInput
          className=" mt-3 border-2  w-72 p-2 h-12 rounded-xl border-orange-400 text-lg text-neutral"
          secureTextEntry={true}
          onChangeText={(value) => handleRegisterData("password", value)}
          placeholder="PASSWORD"
        ></TextInput>
        <TextInput
          className=" mt-3 border-2  w-72 p-2 h-12 rounded-xl border-orange-400 text-lg text-neutral"
          secureTextEntry={true}
          onChangeText={(value) =>
            handleRegisterData("confirm_password", value)
          }
          placeholder="CONFIRM PASSWORD"
        ></TextInput>
        <View className="mt-4 mx-auto">
          <TouchableOpacity onPress={registerPrint}>
            <RegisterButton></RegisterButton>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-14 flex-row  items-center justify-between">
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <RegisterButton></RegisterButton>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
