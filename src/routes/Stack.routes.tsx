import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import Login from "../screens/VerificationScreens/LoginScreen";
import RecoverPassword from "../screens/VerificationScreens/RecoverPasswordScreen";
import { Register } from "../screens/RegisterScreen";

export type StackParamList = {
  login: undefined;
  recoverPassword: undefined;
  register: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="recoverPassword"
        component={RecoverPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
