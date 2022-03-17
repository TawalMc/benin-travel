import { ScrollTags } from "@/components/ScrollTownChild/ScrollTags"
import { Box, Image, Link, Text, VStack, propNames } from "@chakra-ui/react"

import { ScrollAuthor } from "./ScrollAuthor"

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
      bgColor={"rgb(240,240,240, 0.5)"}
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
      <Box position={"absolute"} zIndex={200} top={2} right={2}>
        <ScrollAuthor author={author} authorLink={authorLink} />
      </Box>
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
