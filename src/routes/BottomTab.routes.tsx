import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from "@expo/vector-icons/Feather";

import MoneyFlowScreen from "../screens/Logged/MoneyFlow";
import Teste2 from "../screens/Logged/Teste2";
import HomeScreen from "../screens/Logged/HomeScreen";

import { MoneyFlowProvider } from "../contexts/MoneyFlowContext";

type TabParamList = {
  Home: undefined;
  Explore: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabRoutes() {
  return (
    <MoneyFlowProvider>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "rgb(31, 156, 0)",
          tabBarInactiveTintColor: "rgba(0, 0, 0, 0.37)",
          tabBarStyle: {
            position: "absolute",
            height: 60,
            left: "5%",
            right: "5%",
            backgroundColor: "rgba(234, 225, 225, 0.63)",
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
          component={MoneyFlowScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  backgroundColor: "transparent",
                  borderRadius: 25,
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons name="attach-money" size={35} color={color} />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Teste2}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  backgroundColor: "transparent",
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

        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  backgroundColor: "transparent",
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
      </Tab.Navigator>
    </MoneyFlowProvider>
  );
}
