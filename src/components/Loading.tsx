import { Spinner, Text, VStack } from "@chakra-ui/react"

export const Loading = () => {
  return (
    <VStack pos={"absolute"} top={"45%"} left={"45%"}>
      <Spinner
        size={"xl"}
        thickness={"4px"}
        color={"blue.500"}
        speed={"0.65s"}
      />
      <Text>Loading...</Text>
    </VStack>
  )
}
