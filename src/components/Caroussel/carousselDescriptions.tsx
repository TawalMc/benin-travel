import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react"

type CarousselDescriptionsType = {
  description: string
  country: string
  department: string
  town: string
}

export const CarousselDescriptions = (props: CarousselDescriptionsType) => {
  return (
    <Box h={"25%"}>
      <Box
        maxW={"360px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"lg"}
        borderRadius={"18px"}
        fontSize={"0.75em"}
        p={4}
        textAlign={"left"}
        color={"black"}
      >
        <HStack w={"100%"} justifyContent={"space-between"} fontWeight={"bold"}>
          <Text color={"yellow.600"}>{props.country}</Text>
          <Text>
            <span style={{ color: "green" }}>{props.department}</span>,&nbsp;
            <span style={{ color: "red" }}>{props.town}</span>
          </Text>
        </HStack>
        <Text>{props.description}</Text>
      </Box>
    </Box>
  )
}
