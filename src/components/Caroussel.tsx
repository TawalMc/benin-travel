import { updateIndex } from "@/utils/libs"
import { useTown } from "@/utils/state"
import {
  AuthorCredit,
  CarousselTown,
  FirstPartTown,
  SecondPartTown
} from "@/utils/type"
import {
  Box,
  Divider,
  HStack,
  Heading,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import {
  RiArrowLeftCircleLine,
  RiArrowRightCircleLine,
  RiCommunityLine,
  RiShoppingCart2Line,
  RiTeamLine,
  RiVolumeUpLine
} from "react-icons/ri"

/**
 *
 */
type CarousselProps = CarousselTown

export const Caroussel = (props: CarousselProps) => {
  const [currDescImg, setCurrDescImg] = useState<number>(0)
  const [state, actions] = useTown()
  const router = useRouter()

  // Will be used to change bgImg and desc from many slides when we are on caroussel
  const changeDescAndImg = (next: boolean) => {
    const unit = next ? 1 : -1
    setCurrDescImg((old) => updateIndex(old + unit, props.children.length))
  }

  const changeTown = (next: boolean) => {
    const unit = next ? 1 : -1
    const townIndex = updateIndex(
      state.currentIndex + unit,
      state.townsList.length
    )
    actions.updateTown(townIndex)

    // console.log(`/towns/${state.townsList[townIndex].toLowerCase()}`)

    router.push(`/towns/${state.townsList[townIndex].toLowerCase()}`)
  }

  return (
    <VStack
      w={"100%"}
      h={"100%"}
      bgImg={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.children[currDescImg].img})`}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      color={"#ffffff"}
    >
      <CarousselTop
        {...props}
        description={props.children[currDescImg].description}
      />
      <CarousselBottom
        {...props}
        currentDescImg={currDescImg + 1}
        totalDescImg={props.children.length}
        author={props.children[currDescImg].author}
        authorLink={props.children[currDescImg].authorLink}
      />
      <CarousselButtons
        changeDescAndImg={changeDescAndImg}
        changeTown={changeTown}
      />
    </VStack>
  )
}

/**
 *
 */
type CarousselTopProps = FirstPartTown

const CarousselTop = (
  props: CarousselTopProps & { description: string }
): JSX.Element => {
  return (
    <Stack
      h={"65%"}
      w={"100%"}
      /* bgColor={"yellow.100"} */
      direction={["column", "column", "row"]}
      justify={"space-between"}
      paddingLeft={"15px"}
      paddingRight={["15px", "15px", "0"]}
      spacing={["0", "0", "5%"]}
    >
      <VStack
        /* bgColor={"red.100"} */
        align={["flex-end", "flex-end", "flex-start"]}
        justify={"center"}
        paddingTop={["15px", "15px", "0"]}
        w={["100%", "100%", "50%"]}
        h={["50%", "50%", "100%"]}
      >
        <Heading as={"h2"} size={"xl"}>
          {props.country}
        </Heading>
        <Heading as={"h3"} size={"lg"}>
          {props.town}, {props.department}
        </Heading>
        <Text textAlign={"justify"}>{props.description}</Text>
      </VStack>
      <VStack
        /* bgColor={"red.300"} */
        w={["100%", "100%", "50%"]}
        h={["50%", "50%", "100%"]}
        justify={"center"}
        align={["flex-end", "flex-end", "flex-start"]}
      >
        <Box bgColor={"rgba(95, 255, 111, 0.3)"} pl={7} pr={7} pt={4} pb={4}>
          <Text>{props.type}</Text>
        </Box>
        <HStack
          bgColor={"rgba(95, 255, 111, 0.3)"}
          pl={4}
          pr={4}
          pt={4}
          pb={4}
          width={"100%"}
          justify={"space-between"}
        >
          <HStack align={"center"}>
            <Icon as={RiTeamLine} boxSize={"2em"} />
            <Text>{props.people}</Text>
          </HStack>
          <HStack>
            <Icon as={RiVolumeUpLine} boxSize={"2em"} />
            <Text>{props.language.toString()}</Text>
          </HStack>
        </HStack>
      </VStack>
    </Stack>
  )
}

/**
 *
 */
type CarousselBottomProps = AuthorCredit &
  SecondPartTown & {
    currentDescImg: number
    totalDescImg: number
  }

const CarousselBottom = (props: CarousselBottomProps): JSX.Element => {
  return (
    <VStack h={"35%"} w={"100%"} color={"black"} justify={"center"}>
      {props.author !== "any" && (
        <Link
          color={"#ffffff"}
          href={props.authorLink}
          pos={"absolute"}
          bottom={"60px"}
          left={"0"}
          isExternal
          fontStyle={"italic"}
          fontSize={"sm"}
        >
          @{props.author}
        </Link>
      )}
      <HStack
        h={"48px"}
        w={["100%", "100%", "50%"]}
        bgColor={"rgba(255, 51, 51, 0.3)"}
        pos={"absolute"}
        bottom={"0"}
        left={"0"}
        justify={"space-around"}
        align={"center"}
        fontWeight={"bold"}
        color={"#ffffff"}
      >
        <HStack>
          <Icon as={RiCommunityLine} boxSize={"1.5em"} />
          <Text>{props.district}</Text>
        </HStack>
        <Divider orientation={"vertical"} h={"60%"} />
        <HStack>
          <Icon as={RiShoppingCart2Line} boxSize={"1.5em"} />
          <Text>{props.food}</Text>
        </HStack>
        <Divider orientation={"vertical"} h={"60%"} />
        <HStack>
          <Text>
            {props.currentDescImg}/{props.totalDescImg}
          </Text>
        </HStack>
      </HStack>
    </VStack>
  )
}

type CarousselButtonsProps = {
  changeDescAndImg: (next: boolean) => void
  changeTown: (next: boolean) => void
}

const CarousselButtons = (props: CarousselButtonsProps) => {
  return (
    <Box
      w={"100px"}
      h={"100px"}
      pos={"absolute"}
      zIndex={100}
      bottom={"72px"} /* bgColor={"red.100"} */
    >
      <HStack
        transform={"translateY(100%)"}
        w={"100%"}
        justify={"space-between"}
      >
        <IconButton
          variant={"unstyled"}
          aria-label="Left"
          as={RiArrowLeftCircleLine}
          color={"#ffffff"}
          boxSize={"2em"}
          onClick={() => props.changeTown(false)}
        />

        <IconButton
          variant={"unstyled"}
          aria-label="Right"
          as={RiArrowRightCircleLine}
          color={"#ffffff"}
          boxSize={"2em"}
          onClick={() => props.changeTown(true)}
        />
      </HStack>
      <HStack
        transform={"rotate(90deg)"}
        w={"100%"}
        justify={"space-between"}
        /* bgColor={"red.300"} */
      >
        <IconButton
          variant={"unstyled"}
          aria-label="Up"
          as={RiArrowLeftCircleLine}
          color={"#ffffff"}
          boxSize={"2em"}
          onClick={() => props.changeDescAndImg(false)}
        />
        <IconButton
          variant={"unstyled"}
          aria-label="Down"
          as={RiArrowRightCircleLine}
          color={"#ffffff"}
          boxSize={"2em"}
          onClick={() => props.changeDescAndImg(true)}
        />
      </HStack>
    </Box>
  )
}
