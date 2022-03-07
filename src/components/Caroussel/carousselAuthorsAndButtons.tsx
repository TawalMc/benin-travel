import { AuthorCredit } from "@/utils/type"
import { HStack, IconButton, Link } from "@chakra-ui/react"
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri"

type CarousselAthorsAndButtonsProps = AuthorCredit & {
  changeTown: (next: boolean) => void
}

export const CarousselAthorsAndButtons = (
  props: CarousselAthorsAndButtonsProps
) => {
  return (
    <HStack w={"75%"} h={"2.5em"} justifyContent={"space-between"}>
      <IconButton
        variant={"unstyled"}
        aria-label="Left"
        as={RiArrowLeftLine}
        color={"#000"}
        boxShadow={"2xl"}
        boxSize={"2em"}
        onClick={() => props.changeTown(false)}
      />
      {props.author !== "any" && (
        <Link
          color={"#000"}
          href={props.authorLink}
          isExternal
          fontStyle={"italic"}
          fontSize={"sm"}
          fontWeight={"bold"}
          textTransform={"lowercase"}
        >
          @{props.author}
        </Link>
      )}

      <IconButton
        variant={"unstyled"}
        aria-label="Right"
        as={RiArrowRightLine}
        color={"#000"}
        boxShadow={"2xl"}
        boxSize={"2em"}
        onClick={() => props.changeTown(true)}
      />
    </HStack>
  )
}
