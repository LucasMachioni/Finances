import React, { useState } from "react";
import { VStack, Box, Text, Button, ButtonText } from "@gluestack-ui/themed";
import { HStack } from "@gluestack-ui/themed";
import { MotiView } from "moti";
import { FlatList } from "react-native";

import { useMoneyFlow, Item } from "../../contexts/MoneyFlowContext";

export default function MoneyFlow() {
  const { items } = useMoneyFlow();
  const [activeTab, setActiveTab] = useState<"gastos" | "ganhos">("gastos");

  const filteredData = items.filter((item) => item.type === activeTab);

  return (
    <VStack space="sm" p="$4" alignItems="center">
      <Box mt="$4">
        <Text
          fontStyle="italic"
          fontWeight="$extrabold"
          color="black"
          fontSize={30}
        >
          {activeTab === "gastos" ? "Gastos" : "Ganhos"}
        </Text>
      </Box>

      <HStack mt="$4" width="$96" justifyContent="center" position="relative">
        {(["gastos", "ganhos"] as const).map((tab) => (
          <MotiView
            key={tab}
            from={{ scale: 1 }}
            animate={{ scale: activeTab === tab ? 1.1 : 1 }}
            transition={{ type: "timing", duration: 200 }}
            style={{ width: 100 }}
          >
            <Button
              bg="transparent"
              borderRadius={1}
              onPress={() => setActiveTab(tab)}
              borderColor="black"
            >
              <ButtonText color={activeTab === tab ? "$black" : "$gray"}>
                {tab === "gastos" ? "Gastos" : "Ganhos"}
              </ButtonText>
            </Button>
          </MotiView>
        ))}

        <MotiView
          style={{
            position: "absolute",
            bottom: 0,
            left: activeTab === "gastos" ? "30%" : "29%",
            height: 3,
            backgroundColor: "black",
            width: 60,
            borderRadius: 10,
          }}
          animate={{ translateX: activeTab === "ganhos" ? 100 : 0 }}
          transition={{ type: "timing", duration: 250 }}
        />
      </HStack>

      <Box
        width="$96"
        mt="$4"
        borderWidth={0.5}
        borderColor="black"
        borderRadius="$md"
        overflow="hidden"
        bg="$white"
        maxHeight={400}
      >
        <FlatList<Item>
          data={filteredData}
          keyExtractor={(item) => item.id!}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth={1}
              borderColor="$gray"
              p="$3"
              m="$1"
              borderRadius="$sm"
              bg="$lightGray"
            >
              <Text color="black" mb="$1">
                Data: {item.date}
              </Text>
              
              <Text color="black">Valor: R$ {item.value}</Text>

              <Text color="black" mb="$1">
                Descrição: {item.description}
              </Text>
            </Box>
          )}
        />
      </Box>
    </VStack>
  );
}
