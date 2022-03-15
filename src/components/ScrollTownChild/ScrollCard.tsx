import {
  ScrollBottom,
  ScrollBottomProps
} from "@/components/ScrollTownChild/ScrollBottom"
import {
  ScrollTop,
  ScrollTopProps
} from "@/components/ScrollTownChild/ScrollTop"
import { VStack } from "@chakra-ui/react"

type ScrollCardProps = {
  top: ScrollTopProps
  bottom: ScrollBottomProps
}

export const ScrollCard = (props: ScrollCardProps) => {
  return (
    <VStack
      bgColor={"rgb(240,240,240, 0.5)"}
      borderWidth={"1px"}
      rounded={"lg"}
      h={"75vh"}
      w={"96vw"}
      my={8}
    >
      <ScrollTop {...props.top} />
      <ScrollBottom {...props.bottom} />
    </VStack>
  )
}
