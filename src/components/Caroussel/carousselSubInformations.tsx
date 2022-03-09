import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  Text
} from "@chakra-ui/react"
import { RiTeamLine, RiTrophyLine, RiVolumeUpLine } from "react-icons/ri"

type CarousselSubInformationProps = {
  isOpen: boolean
  onClose: () => void
  type: string
  people: string
  language: string[]
  town: string
}

export const CarousselSubInformations = (
  props: CarousselSubInformationProps
) => {
  return (
    <Drawer placement={"bottom"} isOpen={props.isOpen} onClose={props.onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader fontWeight={"bold"}>{props.town}</DrawerHeader>
        <DrawerBody>
          <HStack fontWeight={"bold"} mb={"0.5em"}>
            <Icon as={RiTrophyLine} boxSize={"2em"} color={"orange.600"} />
            <Text>{props.type}</Text>
          </HStack>
          <HStack fontWeight={"bold"} mb={"0.5em"}>
            <Icon as={RiTeamLine} boxSize={"2em"} color={"orange.600"} />
            <Text>{props.people}</Text>
          </HStack>
          <HStack fontWeight={"bold"}>
            <Icon as={RiVolumeUpLine} boxSize={"2em"} color={"maroon"} />
            <Text>{props.language.join(", ")}</Text>
          </HStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
