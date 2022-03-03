import {
  Box,
  Button,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useDisclosure
} from "@chakra-ui/react"
import {
  RiArrowDownSFill,
  RiExternalLinkLine,
  RiEyeLine,
  RiHome3Line,
  RiQuestionLine
} from "react-icons/ri"

import { ModalTowns } from "./ModalTowns"

export const Header = () => {
  return (
    <Box position={"absolute"} zIndex={200}>
      <Menu>
        <MenuButton
          _focus={{
            bg: "white"
          }}
          _active={{
            bg: "white"
          }}
          bgColor={"white"}
          borderRadius={"none"}
          as={Button}
          rightIcon={<Icon as={RiArrowDownSFill} />}
        >
          Benin Travel
        </MenuButton>
        <MenuList borderRadius={"inherit"}>
          <MenuItemLink
            icon={<RiHome3Line size={"1.5em"} />}
            label={NAV_ITEMS[0].label}
            href={NAV_ITEMS[0].href}
          />
          <MenuItemLink
            icon={<RiEyeLine size={"1.5em"} />}
            label={NAV_ITEMS[1].label}
            href={NAV_ITEMS[1].href}
          />
          <MenuItemGoto />
          <MenuDivider />
          <MenuItemLink
            icon={<RiQuestionLine size={"1.5em"} />}
            label={NAV_ITEMS[2].label}
            href={NAV_ITEMS[2].href}
          />
        </MenuList>
      </Menu>
    </Box>
  )
}

const MenuItemGoto = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <MenuItem
        _hover={{
          textDecoration: "none",
          fontWeight: "bold",
          border: "none"
        }}
        onClick={onOpen}
        icon={<RiExternalLinkLine size={"1.5em"} />}
      >
        Aller à
      </MenuItem>
      <ModalTowns isOpen={isOpen} onClose={onClose} />
    </>
  )
}

const MenuItemLink = ({
  href,
  label,
  icon
}: {
  href: string
  label: string
  icon: any
}) => {
  return (
    <MenuItem
      as={Link}
      _hover={{
        textDecoration: "none",
        fontWeight: "bold",
        border: "none"
      }}
      href={href}
      icon={icon}
    >
      {label}
    </MenuItem>
  )
}

/**
 * * Navigation components
 */

type Item = {
  label: string
  href: string
}

const NAV_ITEMS: Array<Item> = [
  {
    label: "Accueil",
    href: "/"
  },
  {
    label: "Explorer",
    href: "/towns/cotonou"
  },
  {
    label: "A propos",
    href: "/about"
  }
]
