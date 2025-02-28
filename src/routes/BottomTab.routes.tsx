import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import Teste from "../screens/Logged/Teste";
import Teste2 from "../screens/Logged/Teste2";
import HomeScreen from "../screens/Logged/HomeScreen";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

type TabParamList = {
  Home: undefined;
  Explore: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabRoutes() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "rgb(94, 212, 40)",
      tabBarInactiveTintColor: "#8778ad",
      tabBarStyle: {
        position: "absolute",
        height: 60, 

        left: "5%", 
        right: "5%",
        backgroundColor: "rgb(234, 225, 225)63)",
        borderTopWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
      },
      tabBarItemStyle: {
        height: 40,
        margin: 5,
        padding: 5,
      },
    }}
  >
      <Tab.Screen
        name="Explore"
        component={Teste}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(119, 255, 0, 0.14)"
                  : "transparent",
                borderRadius: 25,
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome6 name="flask" size={28} color={color} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(150, 244, 0, 0.18)"
                  : "transparent",
                borderRadius: 25,
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="user" size={33} color={color} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Teste2}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(119, 255, 0, 0.14)"
                  : "transparent",
                borderRadius: 25,
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome6 name="user-astronaut" size={28} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
