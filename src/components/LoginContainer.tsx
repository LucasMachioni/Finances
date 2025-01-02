import React from "react";
import {
  AlertCircleIcon,
  Box,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Image,
  Text,
  VStack,
  Button,
  ButtonText,
  HStack,
} from "@gluestack-ui/themed";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../routes/Stack.routes";
import { StackNavigationProp } from '@react-navigation/stack';

export default function LoginContainer() {

  type LoginScreenNavigationProp = StackNavigationProp<StackParamList>;

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const navToRecover = () => {
    navigation.navigate('recoverPassword');
  };

  return (
    <>
      <VStack>
        <Box
          bg="$textDark950"
          w={"$80"}
          h={"$96"}
          justifyContent="center"
          alignItems="center"
          borderRadius={"$3xl"}
          padding={4}
        >
          <Box h="$32" w="$64" justifyContent="flex-end" top={"5%"}>
            <VStack alignItems="center" marginTop={80}>
              <Text
                color="$white"
                fontSize={35}
                lineHeight={40}
                fontWeight="$bold"
                textAlign="center"
                backgroundColor="$textDark950"
                borderRadius={10}
              >
                {"  "}Finanças{"  "}
                <Image
                  alt="coin icon"
                  size="xs"
                  source={require("../../assets/coin.png")}
                />
              </Text>
            </VStack>

            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={true}
              top={16}
            >
              <FormControlLabel mb="$1">
                <FormControlLabelText color="white">
                  E-mail
                </FormControlLabelText>
              </FormControlLabel>
              <Input bgColor="$white" borderColor="$yellow300">
                <InputField
                  type="text"
                  placeholder="E-mail"
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText>
                  Insira um e-mail válido!
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>

            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={true}
              top={20}
            >
              <FormControlLabel mb="$1" marginTop={15}>
                <FormControlLabelText color="white">Senha</FormControlLabelText>
              </FormControlLabel>
              <Input bgColor="$white" borderColor="$yellow300">
                <InputField
                  type="password"
                  placeholder="Senha"
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText>
                  Digite sua senha!
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          </Box>

          <Button
            size="lg"
            variant="outline"
            action="primary"
            isDisabled={false}
            isFocusVisible={true}
            top={"$1/4"}
            borderColor="$yellow300"
          >
            <ButtonText color="white">Entrar </ButtonText>
            <AntDesign name="export" size={24} color="white" />
          </Button>
        </Box>
        <HStack justifyContent="center">
          <Button size="sm" variant="link" action="primary" isDisabled={false} isFocusVisible={false} onPress={navToRecover}>
            <ButtonText>Esqueci minha senha</ButtonText>
          </Button>
          <Text top={8} color="#4169E1"> / </Text>
          <Button size="sm" variant="link" action="primary" isDisabled={false} isFocusVisible={false} >
            <ButtonText>Primeiro acesso</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </>
  );
}
