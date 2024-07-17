import { View, Text } from "react-native";
import * as React from "react";

const DetailsScreens = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text
        className="text-2xl font-bold"
        onPress={() => navigation.navigate("Home")}
      >
        Details Screen
      </Text>
    </View>
  );
};

export default DetailsScreens;
