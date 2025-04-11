import React, { useState } from "react";
import { View } from "react-native";
import {
  VStack,
  Avatar,
  AvatarFallbackText,
  Button,
  ButtonText,
  Center,
  Input,
  InputField,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Heading,
  Icon,
  CloseIcon,
  Text,
  Box,
  HStack,
  Pressable,
} from "@gluestack-ui/themed";
import { useMoneyFlow } from "../../contexts/MoneyFlowContext";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function HomeScreen() {
  const { addItem, maskDate } = useMoneyFlow();
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (description && value && date) {
      addItem({
        description,
        value: parseFloat(value),
        date,
        type: "gastos",
      });

      setDescription("");
      setValue("");
      setDate("");
      setShowModal(false);
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  const changeName = () => {
    
  }

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Box
        position="absolute"
        top={-400}
        width={600}
        height={570}
        bg="rgba(132, 232, 107, 0.35)"
        borderRadius="$full"
      />

      <VStack
        alignItems="center"
        justifyContent="center"
        w={"$full"}
        h={160}
        paddingTop={"$12"}
      >
        <Avatar bgColor="$green" size="xl" borderRadius="$full">
          <AvatarFallbackText>Lucas M</AvatarFallbackText>
        </Avatar>
      </VStack>

      <VStack
        w={"85%"}
        h={"15%"}
        paddingTop={"$2"}
        bg="$trueGray200"
        borderRadius={15}
        elevation={20}
        alignItems="center"
        justifyContent="center"
      >
        <HStack gap={10}>
          <Text marginBottom={15} fontWeight={"$bold"} fontSize={20}>
            Lucas Machioni
          </Text>

          <Pressable marginTop={"$1"}>
            <FontAwesome6 name="pencil" size={17} color="rgba(45, 146, 25, 0.99)" />
          </Pressable>
        </HStack>

        <HStack
          borderWidth={0.5}
          borderColor="$coolGray400"
          minWidth={170}
          h={50}
          bg="$coolGray300"
          alignItems="center"
          borderRadius={8}
          padding={"$2"}
        >
          <Text>Saldo Atual: </Text>
          <Text>R$ 999.999,00</Text>
        </HStack>
      </VStack>

      <Center mt="$4">
        <Button onPress={() => setShowModal(true)}>
          <ButtonText>Adicionar</ButtonText>
        </Button>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <ModalBackdrop />
          <ModalContent>
            <ModalHeader>
              <Heading size="lg">Adicionar Item</Heading>
              <ModalCloseButton>
                <Icon as={CloseIcon} />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <Input mb="$2">
                <InputField
                  placeholder="Data (dd/mm/aaaa)"
                  keyboardType="numeric"
                  value={date}
                  onChangeText={(text) => setDate(maskDate(text))}
                />
              </Input>

              <Input mb="$2">
                <InputField
                  placeholder="Valor"
                  keyboardType="numeric"
                  value={value}
                  onChangeText={setValue}
                />
              </Input>

              <Input mb="$2">
                <InputField
                  placeholder="Descrição"
                  value={description}
                  onChangeText={setDescription}
                />
              </Input>

              <Button onPress={handleAdd} mt="$2">
                <Text color="$white">Adicionar</Text>
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Center>
    </View>
  );
}
