import {
  ScrollBottom,
  ScrollBottomProps
} from "@/components/Scroll/ScrollBottom"
import { ScrollTop, ScrollTopProps } from "@/components/Scroll/ScrollTop"
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
