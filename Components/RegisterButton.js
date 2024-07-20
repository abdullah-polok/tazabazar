import { View, Text, Button } from "react-native";
import React from "react";
import tw from "twrnc";
const RegisterButton = () => {
  return (
    <View>
      <Text
        text={"Login"}
        style={tw`text-lg text-white bg-orange-400 py-2 px-8 rounded-lg`}
      >
        Register
      </Text>
    </View>
  );
};

export default RegisterButton;
