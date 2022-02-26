import {
  Box,
  Button,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react"
import { RiArrowDownSFill } from "react-icons/ri"

export const Header = () => {
  return (
    <Box position={"absolute"} zIndex={100}>
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
          {NAV_ITEMS.map((item) => (
            <MenuItem
              as={Link}
              href={item.href}
              key={item.label}
              _hover={{
                textDecoration: "none",
                fontWeight: "bold",
                border: "none"
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
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
