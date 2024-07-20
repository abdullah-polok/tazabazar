import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
const ButtonCom = () => {
  return (
    <View>
      <Text style={tw`text-2xl text-white bg-orange-400 py-2 px-14 rounded-lg`}>
        Login
      </Text>
    </View>
  );
};

export default ButtonCom;
