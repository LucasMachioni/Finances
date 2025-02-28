import React, { useState, useEffect } from "react";
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
import { User } from "../interface/auth";
import { api } from "../api/apiConfig";

export function Register() {
  const [user, setUser] = useState<User>({ name: "", email: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (field: keyof User, value: string) => {
    setUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (confirmPassword && user.password !== confirmPassword) {
      setMessage("As senhas não coincidem.");
    } else {
      setMessage("");
    }
  }, [user.password, confirmPassword]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  type StackScreenNavigationProp = StackNavigationProp<StackParamList>;
  const navigation = useNavigation<StackScreenNavigationProp>();

  const navToLogin = () => {
    navigation.navigate("login");
  };

  const handleSubmit = async () => {
    if (!user.name || !user.email || !user.password) {
      setMessage("Todos os campos são obrigatórios.");
      return;
    }

    if (!user.email.includes("@")) {
      setMessage("Insira um e-mail válido.");
      return;
    }

    if (user.password.length < 6) {
      setMessage("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (user.password !== confirmPassword) {
      setMessage("As senhas não coincidem.");
      return;
    }
    const userData = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    
    try {

      const response = await api.post("/user/save",{
        data: (userData)
      });
      console.log("Usuário cadastrado com sucesso:", response.data.userData);
      navigation.navigate("login");

    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      setMessage("Erro ao criar usuário. Tente novamente.");
    }

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
            <InputField
              type="text"
              placeholder="Insira seu nome"
              onChangeText={(value) => handleChange("name", value)}
              value={user.name}
            />
          </Input>
          <FormControlLabel mb="$1" paddingTop={"$6"}>
            <FormControlLabelText>E-mail</FormControlLabelText>
          </FormControlLabel>
          <Input borderWidth={1} borderColor="black" bg="white">
            <InputField
              type="text"
              placeholder="email@example.com"
              onChangeText={(value) => handleChange("email", value)}
              value={user.email}
            />
          </Input>
          <VStack space="xs" paddingTop={"$6"}>
            <FormControlLabelText>Senha</FormControlLabelText>
            <Input alignItems="center" borderColor="black" borderWidth={1} bg="white">
              <InputField
                onChangeText={(value) => handleChange("password", value)}
                placeholder="Digite sua senha"
                type={showPassword ? "text" : "password"}
                value={user.password}
              />
              <InputSlot pr="$3" onPress={() => setShowPassword(!showPassword)}>
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color="$darkBlue500"
                />
              </InputSlot>
            </Input>
          </VStack>
          <VStack space="xs" paddingTop={"$6"}>
            <FormControlLabelText>Confirme a senha</FormControlLabelText>
            <Input alignItems="center" borderColor="black" borderWidth={1} bg="white">
              <InputField
                onChangeText={setConfirmPassword}
                placeholder="Digite a senha novamente"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
              />
              <InputSlot pr="$3" onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <InputIcon
                  as={showConfirmPassword ? EyeIcon : EyeOffIcon}
                  color="$darkBlue500"
                />
              </InputSlot>
            </Input>
            {message && (
              <Text fontSize={14} paddingLeft={7} color="#e00715">
                {message}
              </Text>
            )}
          </VStack>
          <Box alignItems="center">
            <Button
              size="sm"
              variant="solid"
              action="primary"
              bgColor="#B0FEC0"
              borderWidth={1}
              borderColor="black"
              w={"$64"}
              top={"$12"}
              onPress={handleSubmit}
            >
              <ButtonText color="black">Cadastrar</ButtonText>
            </Button>
            <Button
              top={"$24"}
              size="sm"
              variant="link"
              action="primary"
            >
              <ButtonText onPress={navToLogin}>Já possui uma conta?</ButtonText>
            </Button>
          </Box>
        </FormControl>
      </VStack>
    </View>
  );
}
