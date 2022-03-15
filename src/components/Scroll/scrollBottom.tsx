import {
  ScrollInfos,
  ScrollInfosPropsAttribute
} from "@/components/Scroll/ScrollInfos"
import { Button, HStack, useDisclosure } from "@chakra-ui/react"
import { RiMoreFill } from "react-icons/ri"

export type ScrollBottomProps = ScrollInfosPropsAttribute

export const ScrollBottom = (props: ScrollBottomProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HStack
      px={5}
      w={"100%"}
      justify={"flex-end"} /* justify={"space-between"} */
    >
      {/* <DoNotDeleteThis /> */}
      <Button
        aria-label={"share button"}
        variant={"unstyled"}
        _focus={{ border: "none" }}
        color={"black"}
        leftIcon={<RiMoreFill size={30} />}
        onClick={onOpen}
      ></Button>
      <ScrollInfos {...props} isOpen={isOpen} onClose={onClose} />
    </HStack>
  )
}

/**
 * 
 * We'll use this component after if We add logiin tot the website
 IT'll be used to rate, share
 */
/* 
const DoNotDeleteThis = () => {
  return (
    <>
      <Button
        aria-label={"like button"}
        variant={"unstyled"}
        _focus={{
          border: "none"
        }}
        color={"red.500"}
        leftIcon={<RiHeart3Line size={30} />}
      >
        0
      </Button>
      <Button
        aria-label={"share button"}
        variant={"unstyled"}
        _focus={{ border: "none" }}
        color={"black"}
        leftIcon={<RiShareForwardLine size={30} />}
      >
        0
      </Button>
    </>
  )
}
 */
