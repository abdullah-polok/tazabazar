import { View, Text, Image } from "react-native";
import React from "react";

import tw from "twrnc";

const WelcomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      {/* <Image source={"../../assets/Tazabazarq.png"}></Image>
       */}
      <Text className="text-3xl text-red-600">Welcome</Text>
    </View>
  );
};

export default WelcomeScreen;
