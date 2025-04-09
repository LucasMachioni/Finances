import {
  Input,
  InputField,
  Button,
  VStack,
  FlatList,
  Text,
  Box,
  ButtonText,
  Center,
  CloseIcon,
  Heading,
  Icon,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { HStack } from "@gluestack-ui/themed";
import { MotiView } from "moti";
import { Dimensions } from "react-native";

type Item = {
  id?: string;
  description: string;
  value: string;
  date: string;
  type: "gastos" | "ganhos";
};

export default function App() {
  const [data, setData] = useState<Item[]>([]);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"gastos" | "ganhos">("gastos");
  const ref = React.useRef(null);

  const filteredData = data.filter((item) => item.type === activeTab);

  const addItem = () => {
    if (description && value && date) {
      const newItem: Item = {
        description,
        value,
        date,
        type: activeTab,
      };
      setData([...data, newItem]);
      setDescription("");
      setValue("");
      setDate("");
      setShowModal(false);
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <VStack space="sm" p="$4" alignItems="center">
      <Box mt="$4">
        <Text
          fontStyle="italic"
          fontWeight="$extrabold"
          color="black"
          fontSize={30}
        >
          Gastos e Ganhos
        </Text>
      </Box>

      <Center mt="$4">
        <Button onPress={() => setShowModal(true)} ref={ref}>
          <ButtonText>Adicionar</ButtonText>
        </Button>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          finalFocusRef={ref}
        >
          <ModalBackdrop />
          <ModalContent>
            <ModalHeader>
              <Heading size="lg">
                Adicionar {activeTab === "gastos" ? "Gasto" : "Ganho"}
              </Heading>
              <ModalCloseButton>
                <Icon as={CloseIcon} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <Input mb="$2">
                <InputField
                  placeholder="Data (dd/mm/aaaa)"
                  value={date}
                  onChangeText={setDate}
                />
              </Input>
              <Input mb="$2">
                <InputField
                  placeholder="Descrição"
                  value={description}
                  onChangeText={setDescription}
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
              <Button onPress={addItem} mt="$2">
                <Text color="$white">Adicionar</Text>
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Center>

      <HStack mt="$4" width="$96" justifyContent="center" position="relative">
        <MotiView
          from={{ scale: 1 }}
          animate={{ scale: activeTab === "gastos" ? 1.1 : 1 }}
          transition={{ type: "timing", duration: 200 }}
          style={{ width: 100 }}
        >
          <Button
            bg="transparent"
            borderRadius={1}
            onPress={() => setActiveTab("gastos")}
            borderColor="black"
          >
            <ButtonText color={activeTab === "gastos" ? "$black" : "$gray"}>
              Gastos
            </ButtonText>
          </Button>
        </MotiView>

        <MotiView
          from={{ scale: 1 }}
          animate={{ scale: activeTab === "ganhos" ? 1.1 : 1 }}
          transition={{ type: "timing", duration: 200 }}
          style={{ width: 100 }}
        >
          <Button
            bg="transparent"
            borderRadius={1}
            onPress={() => setActiveTab("ganhos")}
            borderColor="black"
          >
            <ButtonText color={activeTab === "ganhos" ? "$black" : "$gray"}>
              Ganhos
            </ButtonText>
          </Button>
        </MotiView>

        <MotiView
          style={{
            position: "absolute",
            bottom: 0,
            left: "29%",
            height: 3,
            backgroundColor: "black",
            width: 60,
            borderRadius: 10,
          }}
          animate={{
            translateX: activeTab === "gastos" ? 0 : 100,
          }}
          transition={{
            type: "timing",
            duration: 250
          }}
        />
      </HStack>

      <Box
        width="$96"
        mt="$4"
        borderWidth={1}
        borderColor="black"
        borderRadius="$md"
        overflow="hidden"
        bg="$white"
        maxHeight={400}
      >
        <FlatList
          data={filteredData}
          renderItem={(info) => {
            const item = info.item as Item;
            return (
              <Box
                borderBottomWidth={1}
                borderColor="$gray"
                p="$3"
                m="$1"
                borderRadius="$sm"
                bg="$lightGray"
              >
                <Text color="black" mb="$1">
                  {item.date}
                </Text>
                <Text color="black" mb="$1">
                  {item.description}
                </Text>
                <Text color="black">R$ {item.value}</Text>
              </Box>
            );
          }}
        />
      </Box>
    </VStack>
  );
}
