import { Box, Image } from "@chakra-ui/react"

type GridCardProps = {
  img: string
}

export const GridCard = (props: GridCardProps) => {
  return (
    <Box bgColor={"rgb(240,240,240, 0.5)"} height="298px">
      <Image
        src={props.img}
        boxSize={"100%"}
        objectFit={"cover"}
        alt={props.img}
      />
    </Box>
  )
}
