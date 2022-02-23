import { Media } from "@/utils/constants"
import { Icon, Link, VStack } from "@chakra-ui/react"
import React from "react"
import {
  RiEarthLine,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill
} from "react-icons/ri"

export const SocialMedia = () => {
  return (
    <VStack
      paddingBottom={"1em"}
      paddingTop={"1em"}
      spacing={"1em"}
      bgColor={"rgba(90, 90, 90, 0.4)"}
      w={"48px"}
      pos={"absolute"}
      right={0}
      zIndex={100}
      bottom={{
        base: "64px",
        md: "0"
      }}
    >
      <Link href={Media.twitter} isExternal>
        <Icon as={RiTwitterFill} boxSize={6} color={"#ffffff"} />
      </Link>

      <Link href={Media.linkedin} isExternal>
        <Icon as={RiLinkedinFill} boxSize={6} color={"#ffffff"} />
      </Link>

      <Link href={Media.github} isExternal>
        <Icon as={RiGithubFill} boxSize={6} color={"#ffffff"} />
      </Link>

      <Link href={Media.website} isExternal>
        <Icon as={RiEarthLine} boxSize={6} color={"#ffffff"} />
      </Link>
    </VStack>
  )
}
