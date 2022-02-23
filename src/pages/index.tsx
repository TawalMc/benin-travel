import { getAllTowns } from "@/utils/contentfulAPI"
import { Box, Text } from "@chakra-ui/react"
import { AppLayout } from "layouts/AppLayouts"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Box width={"100vw"} height={"100vh"} color={"white"}>
        <Text>Index</Text>
      </Box>
    </AppLayout>
  )
}

export default Home
