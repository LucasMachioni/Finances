import React from "react";
import {
  Image,
  View,
  ScrollView,
  Box,
  Button,
  ButtonText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
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

export default function RecoverPassword() {
  type StackScreenNavigationProp = StackNavigationProp<StackParamList>;

  const navigation = useNavigation<StackScreenNavigationProp>();

  const navToLogin = () => {
    navigation.navigate("login");
  };
  const navRecoveryCode = () => {
    navigation.navigate("recoveryCode");
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View
        flex={1}
        h="100%"
        w="100%"
        alignItems="center"
        justifyContent="center"
        bg="rgb(247, 247, 247)"
      >
        <Text
          fontStyle="italic"
          fontWeight={"$extrabold"}
          fontSize={24}
          color="black"
          marginBottom={"$6"}
        >
          Redefinição de Senha
        </Text>
        <VStack>
          <Box
            bg="rgb(255, 255, 255)"
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
            <Alert mx="$2.5" action="success" variant="outline" borderRadius={8}>
              <AlertIcon as={InfoIcon} mr="$3" />
              <AlertText>
                Informe seu e-mail para enviarmos um link de recuperação de
                senha!
              </AlertText>
            </Alert>

            <Box>
              <FormControlLabel>
                <FormControlLabelText color="black">
                  Informe seu e-mail
                </FormControlLabelText>
              </FormControlLabel>
              <Input
                borderWidth={0.5}
                borderColor="$black"
                w={"85%"}
                borderTopWidth={0}
                borderLeftWidth={0}
                borderRightWidth={0}
                bg="rgba(159, 230, 132, 0.18)"
              >
                <InputField type="text" placeholder="Email@example.com" />
              </Input>
            </Box>
            <Button
              size="lg"
              variant="outline"
              action="primary"
              isDisabled={false}
              isFocusVisible={true}
              borderColor="$black"
              bg="rgba(133, 226, 96, 0.53)"
              borderWidth={0.5}
              onPress={navRecoveryCode}
            >
              <ButtonText fontWeight={"$medium"} color="black">Enviar </ButtonText>
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
            <ButtonText color="rgba(63, 185, 6, 0.9)">Lembrei minha senha!</ButtonText>
          </Button>
        </VStack>
      </View>
    </ScrollView>
  );
}
