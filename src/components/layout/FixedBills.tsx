import { VStack, Text, Divider, EditIcon, Box } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import React from "react";

interface FixedBillsProps {
  title: string;
  cash: number;
}

export default function FixedBills({ title, cash }: FixedBillsProps) {
  return (
    <>
      <Box alignSelf="center">
        <VStack
          bg="#ECE9E9"
          w={"$64"}
          h={"$24"}
          borderRadius={15}
          alignItems="flex-start"
          justifyContent="space-around"
        >
          <Text
            marginLeft={"8%"}
            paddingTop={"$4"}
            fontWeight={"$extrabold"}
            color="black"
            fontSize={18}
          >
            {title}
          </Text>

          <Text top={35} left={30} color="green" fontStyle="italic" fontWeight={"$medium"}>R${cash}</Text>

          <Divider
            h={1.5}
            my="$6"
            w={"$32"}
            bgColor="black"
            marginLeft={"$4"}
            marginTop={"$16"}
          />
          <Box alignSelf="flex-end" bottom={"45%"} marginRight={"10%"}>
            <Icon as={EditIcon} w="$10" h="$10" color="black" />
          </Box>
        </VStack>
      </Box>
    </>
  );
}
