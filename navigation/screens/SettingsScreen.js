import { View, Text } from "react-native";
import React from "react";

const SettingsScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text
        className="text-2xl font-bold"
        onPress={() => navigation.navigate("Home")}
      >
        Settings Screen
      </Text>
    </View>
  );
};

export default SettingsScreen;
