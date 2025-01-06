import React, { useState } from "react";
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
  Image,
  InputSlot,
  InputIcon,
  EyeIcon,
  EyeOffIcon,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../routes/Stack.routes";
import { useNavigation } from "@react-navigation/native";

export function Register() {

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessege] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  type StackScreenNavigationProp = StackNavigationProp<StackParamList>;
  const navigation = useNavigation<StackScreenNavigationProp>();

  const navToLogin = () => {
    navigation.navigate("login");
  };

  return (
    <View flex={1} alignItems="center" justifyContent="center" top={"$6"}>
          <Image
            size="md"
            source={require("../../assets/coin-bag.png")}
            alt="Ícone de moedas"
          />
      <VStack bg="$green100" alignItems="center" h={"70%"} w={"85%"} top={"$6"} borderRadius={15} borderWidth={2}>
        <Box alignItems="center" bottom={"$6"}>
        </Box>

        <Box alignItems="center">
          <Text fontWeight={"$bold"} color="black" fontSize={20} top={12}>
            Cadastro
          </Text>
        </Box>

        <FormControl w={"$72"} size="md">
          <FormControlLabel mb="$1" paddingTop={"$6"}>
            <FormControlLabelText>Nome</FormControlLabelText>
          </FormControlLabel>
          <Input borderWidth={1.5} borderColor="black" bg="white">
            <InputField
              type="text"
              placeholder="Insira seu nome"
            />
          </Input>

          <FormControlLabel mb="$1" paddingTop={"$6"}>
            <FormControlLabelText>E-mail</FormControlLabelText>
          </FormControlLabel>
          <Input borderWidth={1.5} borderColor="black" bg="white">
            <InputField type="text" placeholder="email@example.com" />
          </Input>

          <VStack space="xs" paddingTop={"$6"}>
            <FormControlLabelText>Senha</FormControlLabelText>
            <Input alignItems="center" borderColor="black" borderWidth={1.5} bg="white">
              <InputField
                placeholder="Senha..."
                type={showPassword ? "text" : "password"}
              />
              <InputSlot pr="$3" onPress={handleState}>
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color="$darkBlue500"
                />
              </InputSlot>
            </Input>
          </VStack>

          <VStack space="xs" paddingTop={"$6"}>
            <FormControlLabelText>Confirme a senha</FormControlLabelText>
            <Input alignItems="center" borderColor="black" borderWidth={1.5} bg="white">
              <InputField
                placeholder="Senha..."
                type={showPassword ? "text" : "password"}
              />
              <InputSlot pr="$3" onPress={handleState}>
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color="$darkBlue500"
                />
              </InputSlot>
            </Input>

            <Button
              size="sm"
              variant="link"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
            >
              <ButtonText onPress={navToLogin}>Já possui uma conta?</ButtonText>
            </Button>
          </VStack>
          <Box alignItems="center">
            <Button
              size="sm"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              bgColor="#B0FEC0"
              borderWidth={1}
              borderColor="black"
              w={"$64"}
              top={"$6"}
            >
              <ButtonText color="black" onPress={navToLogin}>Cadastrar</ButtonText>
            </Button>
            </Box>
        </FormControl>
      </VStack>
    </View>
  );
}
