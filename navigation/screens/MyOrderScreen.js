import { View, Text } from "react-native";
import React from "react";

const MyOrderScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text
        className="text-2xl font-bold"
        onPress={() => navigation.navigate("Home")}
      >
        My Order Screen
      </Text>
    </View>
  );
};

export default MyOrderScreen;
