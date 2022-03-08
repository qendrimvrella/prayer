import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DatesScreen from "../screens/DatesScreen";
import SettingsScreen from "../screens/SettingsScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          display: "none",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: any) => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Dates"
        component={DatesScreen}
        options={({ navigation }: any) => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ navigation }: any) => ({
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
}
