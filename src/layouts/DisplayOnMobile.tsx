import { ScrollCard } from "@/components/ScrollTownChild/ScrollCard"
import { CarousselTown } from "@/utils/type"

type DisplayOnMobileProps = {
  townData: CarousselTown
}

export const DisplayOnMobile = (props: DisplayOnMobileProps) => {
  return (
    <>
      {props.townData.children.map((child, index) => (
        <ScrollCard
          top={{ ...child, town: props.townData.town }}
          bottom={{ ...props.townData, ...child }}
          key={props.townData.children[index].img}
          drawerLocation={"bottom"}
          height={"75vh"}
          width={"96vw"}
        />
      ))}
    </>
  )
}
