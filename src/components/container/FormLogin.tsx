import React from "react";
import {
  NativeBaseProvider,
  Box,
  Center,
  Image,
  Text,
  Heading,
  VStack,
  HStack,
  Button,
  Input,
  Stack,
  Pressable,
  Icon,
} from "native-base";
import { Platform } from "react-native";

import { TextInput } from "react-native";
import NameAndPass from "../NameAndPass";
import { useSelector } from "react-redux";

type Props = {};

const FormLogin = ({ navigation }: any) => {
  const Isweb = Platform.OS === "web";
  const Email = useSelector((state: any) => state.counter.Email);
  return (
    <Center height={"100%"} bg="red.300">
      <Image
        source={require("../../../assets/game.jpg")}
        height="100%"
        position={"absolute"}
        top="0"
        opacity={"1"}
        alt="background"
      />

      <VStack
        bg={"cyan.700"}
        px="8"
        borderRadius={"lg"}
        py="2"
        width={Platform.OS === "web" ? "50%" : "90%"}
        height={"300"}
      >
        <VStack space={5}>
          <Heading
            color={"white"}
            fontWeight="bold"
            size={"xl"}
            textDecorationLine="underline"
            textAlign={"center"}
          >
            Login
          </Heading>
          <Box
            borderWidth={2}
            px="4"
            py="4"
            borderColor={"white"}
            borderRadius="lg"
          >
            <NameAndPass />
            <Center>
              <Button.Group
                space={2}
                mt="5"
                width={Platform.OS === "web" ? "50%" : "full"}
                justifyContent={"space-around"}
              >
                <Button
                  _pressed={{ bg: "amber.300" }}
                  bg="green.400"
                  onPress={() => navigation.navigate("Register")}
                >
                  Register
                </Button>
                <Button onPress={() => navigation.navigate("Home")}>
                  Login
                </Button>
              </Button.Group>
            </Center>
          </Box>
        </VStack>
      </VStack>
    </Center>
  );
};

export default FormLogin;
