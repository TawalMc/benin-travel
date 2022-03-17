import { GridCard } from "@/components/GridTownChild/GridCard"
import { ScrollCard } from "@/components/ScrollTownChild/ScrollCard"
import { CarousselTown } from "@/utils/type"
import { Box, SimpleGrid } from "@chakra-ui/react"

type DisplayOnLaptopProps = {
  townData: CarousselTown
}

export const DisplayOnLaptop = (props: DisplayOnLaptopProps) => {
  return (
    <SimpleGrid minChildWidth={"179px"} spacing={2} pt={4}>
      {props.townData.children.map((child, index) => (
        <ScrollCard
          top={{ ...child, town: props.townData.town }}
          bottom={{ ...props.townData, ...child }}
          key={props.townData.children[index].img}
          drawerLocation={"right"}
          height={"298px"}
        />
      ))}
    </SimpleGrid>
  )
}
