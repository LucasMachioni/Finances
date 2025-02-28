import {
  Box,
  VStack,
  Text,
  ScrollView,
  Center,
  Divider,
  HStack,
} from "@gluestack-ui/themed";
import { View } from "react-native";
import { User } from "../../interface/auth";
import { useEffect, useState } from "react";
import { api } from "../../api/apiConfig";
import BASE_URL from "../../api/baseURL";
import FixedBills from "../../components/layout/FixedBills";

export default function HomeScreen() {
  const [user, setUser] = useState<User>({ email: "", password: "", name: "" });

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await api.get(`${BASE_URL}user/id?userId`);
        setUser(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário", error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <VStack
        alignItems="center"
        justifyContent="center"
        bg="rgba(119, 255, 0, 0.36)"
        w={"$full"}
        h={160}
        paddingTop={"$12"}
      >
        <Box
          w={"$20"}
          h={"$20"}
          bg="white"
          borderRadius={40}
          alignItems="center"
          justifyContent="center"
        ></Box>
        <VStack py={"$4"}>
          <Text fontSize={24} color="black">
            {user.name}
          </Text>
        </VStack>
      </VStack>
      <ScrollView bg="rgb(255, 255, 255)" style={{ flexGrow: 1, paddingBottom: 100 }}>
        <Box marginTop={"$16"} alignItems="center">
          <Center alignItems="flex-start" marginRight={"45%"}>
            <Text fontSize={20}>Saldo atual:</Text>
          </Center>
          <Divider my="$3" w={"$72"} bgColor="black" />
          <Center alignItems="flex-start" marginRight={"40%"}>
            <Text fontSize={19}>Saldo restante:</Text>
          </Center>
          <Divider my="$3" w={"$72"} bgColor="black" />


          <Text top={"$6"} marginTop={"$12"} fontSize={24} fontStyle="italic" fontWeight={"$extrabold"} color="black">Contas Fixas</Text>
          <VStack
            w={"80%"}
            minHeight={"$48"}
            bg="#272726"
            justifyContent="center"
            alignItems="center"
            borderRadius={20}
            gap={30}
            padding={20}
            marginTop={"$10"}
          >
            <FixedBills title={"Conta de energia"} cash={10} />
            <FixedBills title={"Conta de luz"} cash={50} />
            <FixedBills title={"Conta de água"} cash={50} />
            <FixedBills title={"Conta de água"} cash={50} />
            <FixedBills title={"Conta de água"} cash={50} />
            <FixedBills title={"Conta de água"} cash={50} />
            <FixedBills title={"Conta de água"} cash={50} />
            <FixedBills title={"Conta de água"} cash={50} />
            <FixedBills title={"Conta de água"} cash={50} />
          </VStack>
        </Box>
        <View style={{ height: 150 }} />
      </ScrollView>
    </View>
  );
}
