import { Media } from "@/utils/constants"
import { HStack, Icon, Link } from "@chakra-ui/react"
import React from "react"
import {
  RiFacebookFill,
  RiGithubFill,
  RiMailFill,
  RiTwitterFill
} from "react-icons/ri"

export const SocialMedia = () => {
  return (
    <HStack px={"2"} mt={"1em"} spacing={"1em"} w={"100%"}>
      <Link href={Media.facebook} isExternal>
        <Icon as={RiFacebookFill} boxSize={6} color={"#000"} />
      </Link>

      <Link href={`mailto:${Media.mail}`} isExternal>
        <Icon as={RiMailFill} boxSize={6} color={"#000"} />
      </Link>

      <Link href={Media.twitter} isExternal>
        <Icon as={RiTwitterFill} boxSize={6} color={"#000"} />
      </Link>

      <Link href={Media.github} isExternal>
        <Icon as={RiGithubFill} boxSize={6} color={"#000"} />
      </Link>
    </HStack>
  )
}
