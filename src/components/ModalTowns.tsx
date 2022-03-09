import { getDepartmentsTownsWithState } from "@/utils/contentfulAPI"
import { fetcher } from "@/utils/libs"
import { DepartmentTownsState } from "@/utils/type"
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react"
import Router from "next/router"
import useSWR from "swr"

import { AccordionDepartments } from "./AccordionDepartments"

const useDepartmentsTownsState = () => {
  const { data, error } = useSWR<DepartmentTownsState[]>(
    "api/departmentsTownsWithState",
    fetcher
  )

  return {
    departmentsTownsState: data,
    isLoading: !error && !data,
    isError: error
  }
}

type ModalTownsType = { isOpen: boolean; onClose: () => void }

export const ModalTowns = ({ isOpen, onClose }: ModalTownsType) => {
  const { departmentsTownsState, isLoading, isError } =
    useDepartmentsTownsState()

  /* if (isError) Router.push("#") */
  if (isLoading) return <Text>Loading...</Text>

  return (
    <Modal isOpen={isOpen} onClose={onClose} /* isCentered */>
      <ModalOverlay
        bg={"blackAlpha.300"}
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>Aller à</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          {departmentsTownsState === undefined ? (
            <Text>Loading...</Text>
          ) : (
            <>
              <AccordionDepartments
                departmentsTownsState={departmentsTownsState!!}
                onClose={onClose}
              />
            </>
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            bgColor={"yellow.500"}
            color={"#ffffff"}
            rounded={"none"}
            onClick={onClose}
            _hover={{
              bgColor: "yellow.600"
            }}
          >
            Fermer
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
