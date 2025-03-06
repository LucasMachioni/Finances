import React, { useState } from "react";
import {
  View,
  ScrollView,
  Box,
  Button,
  ButtonText,
  VStack,
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
  Text,
} from "@gluestack-ui/themed";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../routes/Stack.routes";
import { RecoveryCodeInput } from "../../components/layout/RecoveryCodeInput";

export default function RecoveryCode() {
  const [recoveryCode, setRecoveryCode] = useState("");
  type StackScreenNavigationProp = StackNavigationProp<StackParamList>;
  const navigation = useNavigation<StackScreenNavigationProp>();

  const navToLogin = () => {
    navigation.navigate("login");
  };

  const handleCodeComplete = (code: string) => {
    setRecoveryCode(code);
    console.log("Código digitado:", code); 
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View flex={1} h="100%" w="100%" alignItems="center" justifyContent="center">
        <Text fontStyle="italic" fontWeight={"$extrabold"} fontSize={24} color="black" marginBottom={"$6"}>
          Código de Recuperação
        </Text>
        <VStack>
          <Box
            bg="rgb(210, 248, 210)"
            w={"90%"}
            h={"$96"}
            alignItems="center"
            justifyContent="flex-end"
            flexDirection="column"
            gap={"$12"}
            borderRadius={25}
            padding={4}
            paddingBottom={"$16"}
          >
            <Alert mx="$2.5" action="info" variant="accent" borderRadius={8}>
              <AlertIcon as={InfoIcon} mr="$3" />
              <AlertText>
                Informe seu e-mail para enviarmos um link de recuperação de senha!
              </AlertText>
            </Alert>

            <RecoveryCodeInput onCodeComplete={handleCodeComplete} />

            <Button
              size="lg"
              variant="outline"
              action="primary"
              isFocusVisible={true}
              bg="#B0FEC0"
              borderColor="black"
              isDisabled={recoveryCode.length !== 6 || !recoveryCode} // Verifica se tem exatamente 6 dígitos e não está vazio
              onPress={() => {
                console.log("Enviando código:", recoveryCode);
              }}
            >
              <ButtonText color="black">Enviar</ButtonText>
              <AntDesign name="link" size={22} color="black" />
            </Button>
          </Box>
          <Button
            size="sm"
            variant="link"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={navToLogin}
          >
            <ButtonText>Lembrei minha senha!</ButtonText>
          </Button>
        </VStack>
      </View>
    </ScrollView>
  );
}
