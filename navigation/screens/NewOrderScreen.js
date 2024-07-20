import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Picker } from "@react-native-picker/picker";

const NewOrderScreen = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);
  const { orderData, setOrderData } = userInfo;
  const [selectedApp, setSelectedApp] = useState("");

  const handleOrderData = (name, value) => {
    setOrderData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  return (
    <View className="flex-1 items-center">
      {/* <View className="mt-1 bg-orange-400 rounded-lg">
        <Text className=" text-white  text-xl py-10 px-28">New Order</Text>
      </View>
      <View>
        <TextInput
          className=" border-2  w-72 p-2 h-12 rounded-xl border-orange-400 text-lg text-neutral"
          onChangeText={(value) => handleOrderData("website_link", value)}
          placeholder="https://example.com"
        ></TextInput>
        <View className="mt-3">
          <Picker
            selectedApp={selectedApp}
            onValueChange={(itemValue) => setSelectedApp(itemValue)}
          >
            <Picker.Item label="Taobao" value="taobao"></Picker.Item>
            <Picker.Item label="1688" value="1688"></Picker.Item>
          </Picker>
        </View>
        <TextInput
          className=" border-2  w-72 p-2 h-12 rounded-xl border-orange-400 text-lg text-neutral"
          onChangeText={(value) => handleOrderData("quantity", value)}
          placeholder="ENTER YOUR QUANTITY"
        ></TextInput>
        <TextInput
          className=" border-2  w-72 p-2 h-12 rounded-xl border-orange-400 text-lg text-neutral"
          onChangeText={(value) => handleOrderData("website_link", value)}
          placeholder="Enter your amount Chinese Yuan(¥)"
        ></TextInput>
      </View> */}
      <Text>New Order</Text>
    </View>
  );
};

export default NewOrderScreen;

///**
// className=" border-2  w-72 p-2 h-12 rounded-xl border-orange-400 text-lg text-neutral"
// onChangeText={(value) => handleOrderData("app_type", value)}
// placeholder="App type"
