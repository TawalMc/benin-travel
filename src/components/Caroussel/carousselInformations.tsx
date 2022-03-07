import { SecondPartTown } from "@/utils/type"
import { HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react"
import { RiCake3Line, RiCommunityLine, RiMoreFill } from "react-icons/ri"

type CarousselInformationsProps = SecondPartTown & {
  currDescImg: number
  totalDescImg: number
}

export const CarousselInformations = (props: CarousselInformationsProps) => {
  return (
    <HStack
      h={"60px"}
      w={["100%", "100%", "50%"]}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      position={"fixed"}
      bottom={"0"}
      left={"0"}
      justify={"space-around"}
      align={"center"}
      fontWeight={"bold"}
      color={"#000"}
      zIndex={200}
      px={4}
      borderTopRadius={"18px"}
    >
      <HStack color={"blue.600"}>
        <Icon as={RiCommunityLine} boxSize={"1.5em"} />
        <Text>{props.district}</Text>
      </HStack>
      <HStack color={"red.600"}>
        <Icon as={RiCake3Line} boxSize={"1.5em"} />
        <Text>{props.food}</Text>
      </HStack>
      <HStack color={"green.600"}>
        <Text>
          {props.currDescImg}/{props.totalDescImg}
        </Text>
      </HStack>
      <HStack color={"yellow.600"}>
        <Icon as={RiMoreFill} boxSize={"1.5em"} />
      </HStack>
    </HStack>
  )
}
