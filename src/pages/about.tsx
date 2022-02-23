import { Box, Text } from "@chakra-ui/react"
import { AppLayout } from "layouts/AppLayouts"
import type { NextPage } from "next"

const About: NextPage = () => {
  return (
    <AppLayout>
      <Box>
        <Text>About</Text>
      </Box>
    </AppLayout>
  )
}

export default About
