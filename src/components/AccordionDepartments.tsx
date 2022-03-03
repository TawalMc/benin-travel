import { DepartmentTownsState, StateType } from "@/utils/type"
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box
} from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

type AccordionDepartmentsType = {
  departmentsTownsState: DepartmentTownsState[]
  onClose: () => void
}

export const AccordionDepartments = (props: AccordionDepartmentsType) => {
  // const router = useRouter()

  const { departmentsTownsState, onClose } = props
  const BadgeState = (state: StateType) => {
    if (state === "new")
      return (
        <Badge variant={"subtle"} colorScheme={"green"} rounded={"none"}>
          Nouveauté
        </Badge>
      )
    else if (state === "coming soon")
      return (
        <Badge colorScheme={"purple"} rounded={"none"}>
          Bientôt
        </Badge>
      )
    return <></>
  }

  const linkHref = (state: StateType, town: string): string => {
    if (state === "coming soon") {
      /* console.log(router.asPath) */
      return "#"
    }
    return `/towns/${town.toLowerCase()}`
  }

  return (
    <Accordion allowToggle>
      {departmentsTownsState.map((dep) => (
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                fontWeight={"bold"}
                w={"100%"}
              >
                {dep.department}
                {BadgeState(dep.state)}
              </Box>
            </AccordionButton>
          </h2>
          {dep.townsList.map((town) => (
            <Link href={linkHref(town.state, town.name)} passHref>
              <AccordionPanel
                key={town.name}
                _hover={{
                  cursor: "pointer"
                }}
                pb={4}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                onClick={onClose}
              >
                {town.name}
                {BadgeState(town.state)}
              </AccordionPanel>
            </Link>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  )
}
