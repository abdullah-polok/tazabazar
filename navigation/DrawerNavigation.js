import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import BottomNavigation from "./BottomNavigation";
import SettingsScreen from "./screens/MyOrderScreen";
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#ffff",
          width: 250,
        },

        headerStyle: {
          backgroundColor: "#ffff",
        },
        headerShown: true,
        headerTintColor: "#00000",
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",
          title: "Tazabazar",
          headerShadowVisible: false,
          drawerIcon: () => {
            <Ionicons
              name="home-outline"
              size={24}
              color={"#00000"}
            ></Ionicons>;
          },
        }}
        component={BottomNavigation}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: "Settings",
          title: "Tazabazar",
          headerShadowVisible: false,
          drawerIcon: () => {
            <Ionicons
              name="home-outline"
              size={24}
              color={"#00000"}
            ></Ionicons>;
          },
        }}
        component={SettingsScreen}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
