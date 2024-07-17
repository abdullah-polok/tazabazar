import * as React from "react";
import { View, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text
        className="text-2xl font-bold"
        onPress={() => alert("This is the Home Screen")}
      >
        HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;
