import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons/AntDesign";

///Screen import
import HomeScreen from "./screens/HomeScreen";
import NewOrderScreen from "./screens/NewOrderScreen";
import MyOrderScreen from "./screens/MyOrderScreen";

///Screen names
const homeName = "Home";
const detailsName = "New order";
const settingsName = "My order";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn == homeName) iconName = focused ? "home" : "home-outline";
          else if (rn == detailsName)
            iconName = focused ? "list" : "list-outline";
          else if (rn == settingsName)
            iconName = focused ? "list-circle" : "list-circle-outline";

          return (
            <Ionicons name={iconName} size={size} color={color}></Ionicons>
          );
        },
      })}
    >
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={detailsName}
        component={NewOrderScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={settingsName}
        component={MyOrderScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
