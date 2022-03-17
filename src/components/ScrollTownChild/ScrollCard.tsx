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
  height?: string
  width?: string
  drawerLocation?: "bottom" | "right"
}

export const ScrollCard = (props: ScrollCardProps) => {
  return (
    <VStack
      bgColor={"rgb(240,240,240, 0.5)"}
      borderWidth={"1px"}
      rounded={"lg"}
      h={props.height}
      w={props.width}
      /* h={"75vh"}
      w={"96vw"} */
      spacing={0}
      my={8}
    >
      <ScrollTop
        {...props.top}
        /* tagsList={["restaurant", "marché", "historique", "tradition"]} */
      />
      <ScrollBottom
        {...props.bottom}
        drawerLocation={props.drawerLocation}
        /* tagsList={["restaurant", "marché", "historique", "tradition"]} */
      />
    </VStack>
  )
}
