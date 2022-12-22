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
import Emall from "../Emaill";

type Props = {};

const FormRegister = ({ navigation }: any) => {
  const Isweb = Platform.OS === "web";
  return (
    <Center height={"100%"} bg="blue.300">
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
        height={"350"}
      >
        <VStack space={5}>
          <Heading
            color={"white"}
            fontWeight="bold"
            size={"xl"}
            textDecorationLine="underline"
            textAlign={"center"}
          >
            Register
          </Heading>
          <Box
            borderWidth={2}
            px="4"
            py="4"
            borderColor={"white"}
            borderRadius="lg"
          >
            <NameAndPass />
            <Emall />
            <Center>
              <Button.Group
                space={2}
                mt="5"
                width={Platform.OS === "web" ? "50%" : "full"}
                justifyContent={"space-around"}
              >
                <Button
                  onPress={() => navigation.navigate("Home")}
                  bg={"red.700"}
                >
                  Back to Login
                </Button>
                <Button
                  _pressed={{ bg: "amber.300" }}
                  bg="blue.600"
                  onPress={() => navigation.navigate("Login")}
                >
                  Register
                </Button>
              </Button.Group>
            </Center>
          </Box>
        </VStack>
      </VStack>
    </Center>
  );
};

export default FormRegister;
