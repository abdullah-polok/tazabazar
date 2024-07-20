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
import logo from "../../assets/logo.png";
import ButtonCom from "../../Components/ButtonCom";
import RegisterButton from "../../Components/RegisterButton";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const LoginScreen = ({ navigation }) => {
  const userInfo = useContext(AuthContext);
  const { userData, screen, setScreen } = userInfo;

  const [loginInfo, setLoginInfo] = useState({});

  const handleLoginData = (name, value) => {
    setLoginInfo((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleLogIn = () => {
    // console.log(loginInfo.phoneNumber, loginInfo.password);
    // console.log(userData.phoneNumber, userData.password);

    if (
      // userData.phoneNumber == loginInfo.phoneNumber &&
      // userData.password == loginInfo.password
      true
    ) {
      alert("Login Successfully");
      setScreen(false);
    } else {
      alert("phoneNumber and password incorrect");
    }
  };

  return (
    <SafeAreaView className="flex-1 p-8 ">
      <View className="mt-20 mx-auto">
        <Image source={logo} className="rounded-lg w-40 h-40"></Image>
      </View>

      <View className="mt-[60px] mx-auto">
        <Text className="text-5xl font-semibold text-orange-400">Login</Text>
      </View>

      <View className="mt-4">
        <TextInput
          className=" border-2  w-72 p-2 h-12 rounded-xl border-orange-400 text-lg text-neutral"
          onChangeText={(value) => handleLoginData("phoneNumber", value)}
          placeholder="PHONE NUMBER"
          keyboardType="numeric"
        ></TextInput>
        <TextInput
          className=" mt-3 border-2  w-72 p-2 h-12 rounded-xl border-orange-400 text-lg text-neutral"
          secureTextEntry={true}
          onChangeText={(value) => handleLoginData("password", value)}
          placeholder="PASSWORD"
        ></TextInput>
        <View className="mt-4 mx-auto">
          <TouchableOpacity onPress={handleLogIn}>
            <ButtonCom></ButtonCom>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-14 flex-row  items-center justify-between">
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <RegisterButton></RegisterButton>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text className="text-orange-400 text-base">Forget Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
