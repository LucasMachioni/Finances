import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  View,
  VStack,
  Text,
} from "@gluestack-ui/themed";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../routes/Stack.routes";
import { useNavigation } from "@react-navigation/native";

export function Register() {
  type StackScreenNavigationProp = StackNavigationProp<StackParamList>;
  const navigation = useNavigation<StackScreenNavigationProp>();

  const navToLogin = () => {
    navigation.navigate("login");
  };

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <VStack>
        <Box alignItems="center">
          <Text>Cadastro</Text>
        </Box>

        <Box gap={"$1"}>
          <FormControl w={"$72"} size="md">
            <FormControlLabel mb="$1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                defaultValue="12345"
                placeholder="password"
              />
            </Input>

            <FormControlLabel mb="$1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                defaultValue="12345"
                placeholder="password"
              />
            </Input>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                defaultValue="12345"
                placeholder="password"
              />
            </Input>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                defaultValue="12345"
                placeholder="password"
              />
            </Input>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                defaultValue="12345"
                placeholder="password"
              />
            </Input>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                defaultValue="12345"
                placeholder="password"
              />
            </Input>
          </FormControl>
        </Box>
      </VStack>
    </View>
  );
}
