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

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    comparePasswords(value, confirm);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirm(value);
    comparePasswords(password, value);
  };

  const comparePasswords = (pass: string, confirmPass: string) => {
    if (confirmPass && pass !== confirmPass) {
      setMessege("As senhas não coincidem.");
    } else {
      setMessege("");
    }
  };

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
    <View flex={1} alignItems="center" justifyContent="center" bottom={"$4"}>
      <Image
        size="md"
        source={require("../../assets/coin-bag.png")}
        alt="Ícone de moedas"
      />
      <VStack
        bg="$green100"
        alignItems="center"
        h={615}
        w={"85%"}
        top={"$6"}
        borderRadius={15}
        borderWidth={1.5}
        
      >
        <Box alignItems="center" bottom={"$6"}></Box>

        <Box alignItems="center">
          <Text fontWeight={"$bold"} color="black" fontSize={20} top={12}>
            Cadastro
          </Text>
        </Box>

        <FormControl w={"$72"} size="md">
          <FormControlLabel mb="$1" paddingTop={"$6"}>
            <FormControlLabelText>Nome</FormControlLabelText>
          </FormControlLabel>
          <Input borderWidth={1} borderColor="black" bg="white">
            <InputField type="text" placeholder="Insira seu nome" />
          </Input>

          <FormControlLabel mb="$1" paddingTop={"$6"}>
            <FormControlLabelText>E-mail</FormControlLabelText>
          </FormControlLabel>
          <Input borderWidth={1} borderColor="black" bg="white">
            <InputField type="text" placeholder="email@example.com" />
          </Input>

          <VStack space="xs" paddingTop={"$6"}>
            <FormControlLabelText>Senha</FormControlLabelText>
            <Input
              alignItems="center"
              borderColor="black"
              borderWidth={1}
              bg="white"
            >
              <InputField
                onChangeText={handlePasswordChange}
                placeholder="Digite sua senha"
                type={showPassword ? "text" : "password"}
              />
              <InputSlot pr="$3" onPress={handleState}>
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color="$darkBlue500"
                />
              </InputSlot>
            </Input>
            {message && <Text fontSize={14} paddingLeft={7} color="#e00715">{message}</Text>}
          </VStack>

          <VStack space="xs" paddingTop={"$6"}>
            <FormControlLabelText>Confirme a senha</FormControlLabelText>
            <Input
              alignItems="center"
              borderColor="black"
              borderWidth={1}
              bg="white"
            >
              <InputField
                onChangeText={handleConfirmPasswordChange}
                placeholder="Digite a senha novamente"
                type={showPassword ? "text" : "password"}
              />
              <InputSlot pr="$3" onPress={handleState}>
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color="$darkBlue500"
                />
              </InputSlot>
            </Input>
           
           {message && <Text fontSize={14} paddingLeft={7} color="#e00715">{message}</Text>}
          
         

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
              top={"$12"}
            >
              <ButtonText color="black">
                Cadastrar
              </ButtonText>
            </Button>
          <Button
          top={"$24"}
              size="sm"
              variant="link"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
            >
              <ButtonText onPress={navToLogin}>Já possui uma conta?</ButtonText>
            </Button>
          </Box>
        </FormControl>
      </VStack>
    </View>
  );
}
