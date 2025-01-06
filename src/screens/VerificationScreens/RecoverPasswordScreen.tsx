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

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View
        flex={1}
        h="100%"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Image
                    size="md"
                    source={require("../../../assets/coin-bag.png")}
                    alt="Ícone de moedas"
                  />
        <VStack>
          <Box
            bg="#dcf5e1"
            w={"90%"}
            h={"$96"}
            alignItems="center"
            justifyContent="flex-end"
            flexDirection="column"
            gap={"$12"}
            borderRadius={"$3xl"}
            padding={4}
            paddingBottom={"$16"}
            borderWidth={1}
          >
            <Alert mx="$2.5" action="muted" variant="outline">
              <AlertIcon as={InfoIcon} mr="$3" />
              <AlertText>
              Informe seu e-mail para enviarmos um link de recuperação de senha!
              </AlertText>
            </Alert>
            
            <Box>
              <FormControlLabel>
                <FormControlLabelText color="black">
                  Digite o email cadastrado
                </FormControlLabelText>
              </FormControlLabel>
              <Input borderWidth={0.5} bgColor="$white" borderColor="$black" w={"85%"}>
                <InputField type="password" placeholder="Email@example.com" />
              </Input>
            </Box>
            <Button
              size="lg"
              variant="outline"
              action="primary"
              isDisabled={false}
              isFocusVisible={true}
              borderColor="$black"
              bg="#B0FEC0"
            >
              <ButtonText color="black">Enviar </ButtonText>
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
