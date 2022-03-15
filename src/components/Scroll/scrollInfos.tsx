import { ScrollTags } from "@/components/Scroll/ScrollTags"
import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  Text
} from "@chakra-ui/react"
import {
  RiCake3Line,
  RiCommunityLine,
  RiTeamLine,
  RiTrophyLine,
  RiVolumeUpLine
} from "react-icons/ri"

export type ScrollInfosPropsAttribute = {
  type: string
  people: string
  language: string[]
  town: string
  description: string
  food: string
  district: number
  department: string
  country: string
  tagsList?: string[]
}

type ScrollInfosPropsFunc = {
  isOpen: boolean
  onClose: () => void
}

type ScrollInfosProps = ScrollInfosPropsAttribute & ScrollInfosPropsFunc

export const ScrollInfos = (props: ScrollInfosProps) => {
  return (
    <Drawer placement={"bottom"} isOpen={props.isOpen} onClose={props.onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontWeight={"bold"}>{props.town}</DrawerHeader>

        <DrawerBody>
          <Box w={"100%"}>
            <ScrollTags tags={props.tagsList} numberTags={6} />
            <HStack
              w={"100%"}
              justifyContent={"space-between"}
              fontWeight={"bold"}
              px={2}
            >
              <Text color={"yellow.600"}>{props.country}</Text>
              <Text>
                <span style={{ color: "green" }}>{props.department}</span>
                ,&nbsp;
                <span style={{ color: "red" }}>{props.town}</span>
              </Text>
            </HStack>
            <Text textAlign={"justify"} px={2}>
              {props.description}
            </Text>
          </Box>
          <Divider my={4} />
          <HStack fontWeight={"bold"} mb={"0.5em"}>
            <Icon as={RiTrophyLine} boxSize={"2em"} color={"orange.400"} />
            <Text>{props.type}</Text>
          </HStack>
          <HStack fontWeight={"bold"}>
            <Icon as={RiCommunityLine} boxSize={"2em"} color={"green.400"} />
            <Text>{props.district}</Text>
          </HStack>
          <HStack fontWeight={"bold"} mb={"0.5em"}>
            <Icon as={RiTeamLine} boxSize={"2em"} color={"orange.600"} />
            <Text>{props.people}</Text>
          </HStack>
          <HStack fontWeight={"bold"}>
            <Icon as={RiVolumeUpLine} boxSize={"2em"} color={"orange.900"} />
            <Text>{props.language.join(", ")}</Text>
          </HStack>
          <HStack fontWeight={"bold"}>
            <Icon as={RiCake3Line} boxSize={"2em"} color={"red.500"} />
            <Text>{props.food}</Text>
          </HStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
