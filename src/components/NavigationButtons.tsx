import { HStack, IconButton, IconButtonProps } from "@chakra-ui/react"
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri"

type NavigationButtonsProps = {
  changeTown: (next: boolean) => void
}

export const NavigationButtons = (props: NavigationButtonsProps) => {
  return (
    <HStack
      w={"100%"}
      px={2}
      justify={"space-between"}
      position={"fixed"}
      top={"50%"}
      transform={"translateY(-50%)"}
      zIndex={500}
    >
      <NavButton
        aria-label={"last"}
        as={RiArrowDropLeftLine}
        onClick={() => props.changeTown(false)}
      />
      <NavButton
        aria-label={"last"}
        as={RiArrowDropRightLine}
        onClick={() => props.changeTown(true)}
      />
    </HStack>
  )
}

const NavButton = (props: IconButtonProps) => (
  <IconButton
    variant={"unstyled"}
    color={"#000"}
    {...props}
    borderWidth={"1px"}
    borderColor={"#000"}
    rounded={"full"}
  />
)
