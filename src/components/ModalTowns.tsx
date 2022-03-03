import { getDepartmentsTownsWithState } from "@/utils/contentfulAPI"
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
import { useEffect, useState } from "react"

import { AccordionDepartments } from "./AccordionDepartments"

type ModalTownsType = { isOpen: boolean; onClose: () => void }

export const ModalTowns = ({ isOpen, onClose }: ModalTownsType) => {
  const [departmentsTownsState, setDepartmentTownsState] = useState<
    DepartmentTownsState[] | null
  >(null)

  useEffect(() => {
    depTownsState()
  })

  const depTownsState = async () => {
    try {
      let depTownsState = await getDepartmentsTownsWithState()
      setDepartmentTownsState(depTownsState)
    } catch (error) {
      console.log(error)
    }
  }

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
          {departmentsTownsState === null ? (
            <Text>Loading...</Text>
          ) : (
            <>
              <AccordionDepartments
                departmentsTownsState={departmentsTownsState}
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
