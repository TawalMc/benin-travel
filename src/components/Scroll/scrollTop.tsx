import { Box, Button, Image, Link, Tag, Text, VStack } from "@chakra-ui/react"

import { ScrollTags } from "./scrollTags"

export type ScrollTopProps = {
  author: string
  authorLink: string
  img: string
  town: string
  tagsList?: string[]
}

export const ScrollTop = ({
  author,
  authorLink,
  img,
  town,
  tagsList
}: ScrollTopProps) => {
  return (
    <VStack
      borderTopRadius={"lg"}
      bgColor={"black"}
      backdropFilter={"blur(10px) hue-rotate(90deg)"}
      w={"100%"}
      h={"90%"}
      justify={"center"}
    >
      <Image
        src={img}
        boxSize={"100%"}
        objectFit={"cover"}
        borderTopRadius={"lg"}
        alt="abomey"
      />

      {author !== "any" && (
        <Link
          color={"#000"}
          href={authorLink}
          isExternal
          fontStyle={"italic"}
          fontSize={"sm"}
          fontWeight={"bold"}
          textTransform={"lowercase"}
          position={"absolute"}
          zIndex={200}
          top={2}
          right={2}
        >
          @{author}
        </Link>
      )}

      <Box
        w={"100%"}
        position={"absolute"}
        bottom={"0"}
        left={"0"}
        zIndex={200}
        px={2}
      >
        <Text color={"#000"} fontWeight={"bold"} mx={2}>
          {town}
        </Text>

        <ScrollTags tags={tagsList} numberTags={3} />
      </Box>
    </VStack>
  )
}
