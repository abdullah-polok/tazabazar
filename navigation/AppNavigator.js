import { View, Text } from "react-native";
import React from "react";
import { useEffect, useState, useContext } from "react";
import BottomNavigation from "./BottomNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./DrawerNavigation";
import { LoginScreen, WelcomeScreen, RegisterScreen } from "./screens";
import { AuthContext } from "../Provider/AuthProvider";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { screen } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {screen ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
        ) : (
          <Stack.Screen name="Main" component={DrawerNavigation}></Stack.Screen>
        )}
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
