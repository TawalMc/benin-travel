import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useDisclosure
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import {
  RiExternalLinkLine,
  RiEyeLine,
  RiHome3Line,
  RiQuestionLine
} from "react-icons/ri"

import { ModalTowns } from "./ModalTowns"
import { SocialMedia } from "./SocialMedia"

export const Header = () => {
  return (
    <Box
      position={"fixed"}
      zIndex={500}
      left={{ base: "10", md: "40" }}
      top={{ base: "3", md: "7" }}
    >
      <Menu>
        <MenuButton
          _focus={{
            bg: "none"
          }}
          _active={{
            bg: "none"
          }}
          px={5}
          py={1}
          borderWidth={"2px"}
          borderColor={"yellow.500"}
          borderRadius={"50"}
          color={"white"}
          fontWeight={"bold"}
          _hover={{
            bg: "none"
          }}
        >
          Menu
        </MenuButton>
        <MenuList rounded={"md"}>
          <MenuItemLink href="/" label="Benin Travel" />
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
          <SocialMedia />
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
  icon?: any
}) => {
  const router = useRouter()
  return (
    <MenuItem
      /* as={Link} */
      _hover={{
        textDecoration: "none",
        fontWeight: "bold",
        border: "none"
      }}
      onClick={() => router.push(href)}
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
