import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import { NextPage } from "next"
import { RiFacebookFill, RiGoogleFill, RiTwitterFill } from "react-icons/ri"

export const SignIn: NextPage = () => {
  return (
    <VStack
      w={"100vw"}
      h={"100vh"}
      justify={"center"}
      align={"center"}
      /* bgColor={"green"} */
    >
      <VStack
        w={"90%"}
        maxW={"420px"}
        borderWidth={"1px"}
        borderColor={"gray.200"}
        bgColor={"white"}
        rounded={"sm"}
        p={2}
        boxShadow={"md"}
        align={"flex-start"}
        /* bgColor={"gray.400"} */
      >
        <Text fontWeight={"bold"} textAlign={"left"}>
          Benin Travel (Comming soon)
        </Text>
        <Text>Connectez vous à Benin Travel via</Text>
        <HStack w={"100%"} py={2} justify={"space-around"}>
          <IconButton
            aria-label={"Google"}
            icon={<RiGoogleFill size={24} color={"#F56565"} />}
            boxSize={12}
            /* size={"lg"} */
          />
          <IconButton
            aria-label={"Facebook"}
            icon={<RiFacebookFill size={24} color={"#3182CE"} />}
            boxSize={12}
            /* size={"lg"} */
          />
          <IconButton
            aria-label={"Twitter"}
            icon={<RiTwitterFill size={24} color={"#63B3ED"} />}
            boxSize={12}
            /* size={"lg"} */
          />
        </HStack>
      </VStack>
    </VStack>
  )
}

export default SignIn
