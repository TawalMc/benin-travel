import { SecondPartTown } from "@/utils/type"
import {
  HStack,
  Icon,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react"
import { RiCake3Line, RiCommunityLine, RiMoreFill } from "react-icons/ri"

import { CarousselSubInformations } from "./carousselSubInformations"

type CarousselInformationsProps = SecondPartTown & {
  currDescImg: number
  totalDescImg: number
  type: string
  people: string
  language: string[]
  town: string
}

export const CarousselInformations = (props: CarousselInformationsProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
        <IconButton
          aria-label={"Open Drawer"}
          icon={<RiMoreFill size={"1.em"} />}
          onClick={onOpen}
          bgColor={"white"}
        />
        <CarousselSubInformations
          {...props}
          isOpen={isOpen}
          onClose={onClose}
        />
      </HStack>
    </HStack>
  )
}
