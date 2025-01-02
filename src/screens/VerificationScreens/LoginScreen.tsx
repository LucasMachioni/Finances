import React from "react";
import {
  View,
  Text,
  Box,
  Image,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../routes/Stack.routes";
import { StackNavigationProp } from "@react-navigation/stack";

export default function Login() {
  type StackScreenNavigationProp = StackNavigationProp<StackParamList>;

  const navigation = useNavigation<StackScreenNavigationProp>();

  const navToRecover = () => {
    navigation.navigate("recoverPassword");
  };
  const navToRegister = () => {
    navigation.navigate("register")
  }
  return (
    <View flex={1}>
      <Box
        flex={2}
        alignItems="center"
        justifyContent="center"
        top={"$16"}
        w={"100%"}
        marginTop={"22%"}
      >
        <Box bottom={"$48"}>
          <Image
            size="md"
            source={require("../../../assets/coin-bag.png")}
            alt="Ícone de moedas"
          />
        </Box>
        <Box bottom={"$48"}>
          <Text fontSize={24} fontWeight={"$bold"} color="black">
            Finances
          </Text>
        </Box>
        <Box bottom={"$24"}>
          <Text fontSize={20} fontWeight={"$bold"} color="black">
            Login
          </Text>
        </Box>
        <Box bottom={"$24"}>
          <Text fontSize={14} color="black">
            Insira seus dados para acessar sua {"\n                           "}
            conta!
          </Text>
        </Box>
        <Box bottom={"$24"}>
          <FormControl
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}
          >
            <FormControlLabel mb="$1" w={272}>
              <FormControlLabelText>E-mail</FormControlLabelText>
            </FormControlLabel>
            <Input w={"$80"} borderColor="black" borderWidth={2}>
              <InputField
                type="text"
                defaultValue=""
                placeholder="E-mail@example.com"
              />
            </Input>
            <FormControlLabel mb="$1" w={272} paddingTop={"5%"}>
              <FormControlLabelText>Senha</FormControlLabelText>
            </FormControlLabel>
            <Input w={"$80"} borderColor="black" borderWidth={2}>
              <InputField
                type="password"
                defaultValue=""
                placeholder="Digite sua senha"
              />
            </Input>
          </FormControl>

          <Box flexDirection="row" justifyContent="center">
            <Button
              size="sm"
              variant="link"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              onPress={navToRegister}
            >
              <ButtonText>
                Primeiro acesso<Text color="#327CC1"> / </Text>
              </ButtonText>
            </Button>
            <Button
              size="sm"
              variant="link"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              justifyContent="center"
              onPress={navToRecover}
            >
              <ButtonText>Esqueci minha senha</ButtonText>
            </Button>
          </Box>

          <Box alignItems="center">
            <Button top={"$12"} w={"$64"} bgColor="#B0FEC0">
              <ButtonText color="black">Entrar</ButtonText>
            </Button>
          </Box>
        </Box>
      </Box>
    </View>
  );
}
