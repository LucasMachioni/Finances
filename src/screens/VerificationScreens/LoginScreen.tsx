import React, { useState } from "react";
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
  EyeIcon,
  EyeOffIcon,
  InputIcon,
  InputSlot,
  VStack,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../routes/Stack.routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { User } from "../../interface/auth";
import { api } from "../../api/apiConfig";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (field: keyof User, value: string) => {
    setUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  type StackScreenNavigationProp = StackNavigationProp<StackParamList>;

  const navigation = useNavigation<StackScreenNavigationProp>();

  const navToRecover = () => {
    navigation.navigate("recoverPassword");
  };
  const navToRegister = () => {
    navigation.navigate("register");
  };
  const home = () => {
    navigation.navigate("homeScreenAcess");
  };

  // const handleSubmit = async () => {
  //   if (!user.email.includes("@")) {
  //     setMessage("Insira um e-mail válido.");
  //     return;
  //   }
  //   const userData = {
  //     email: user.email,
  //     password: user.password,
  //   };

  //   console.log("dados:", user );

  //   try {
  //     const response = await api.post("/auth/login", userData);

  //     if (response.data.token != "") {
  //       navigation.navigate("homeScreenAcess")
  //     }

  //   } catch (error) {
  //     console.error("Erro ao logar:", error);
  //     setMessage("Erro ao logar usuário. Tente novamente.");
  //   }
  // };

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
          >
            <FormControlLabel mb="$1" w={272}>
              <FormControlLabelText>E-mail</FormControlLabelText>
            </FormControlLabel>
            <Input w={"$80"} borderColor="black" borderWidth={2}>
              <InputField
                type="text"
                defaultValue=""
                placeholder="E-mail@example.com"
                onChangeText={(value) => handleChange("email", value)}
                value={user.email}
              />
            </Input>

            <VStack space="xs" paddingTop={"$6"}>
              <Text color="$text500" lineHeight="$xs">
                Senha
              </Text>
              <Input alignItems="center" borderColor="black" borderWidth={2}>
                <InputField
                  placeholder="Senha..."
                  type={showPassword ? "text" : "password"}
                  onChangeText={(value) => handleChange("password", value)}
                  value={user.password}
                />
                <InputSlot pr="$3" onPress={handleState}>
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color="$darkBlue500"
                  />
                </InputSlot>
              </Input>
            </VStack>
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
            <Button
              top={"$12"}
              w={"$64"}
              bgColor="#B0FEC0"
              borderWidth={1}
              borderColor="black"
              onPress={home}
            >
              <ButtonText color="black">Entrar</ButtonText>
            </Button>
          </Box>
        </Box>
      </Box>
    </View>
  )}