import { SEO } from "@/components/SEO"
import { Subscribe } from "@/components/Subscribe"
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue
} from "@chakra-ui/react"
import { AppLayout } from "layouts/AppLayouts"
import type { NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <AppLayout>
      <SEO />
      <Box width={"100vw"} height={"100vh"} color={"white"}>
        <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                paddingTop={"8px"}
              >
                <Text
                  color={"#000000"}
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: useBreakpointValue({ base: "20%", md: "30%" }),
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "yellow.500",
                    zIndex: -1
                  }}
                >
                  Benin
                </Text>
                <br />
                <Text color={"yellow.500"} as={"span"}>
                  Découvertes et merveilles
                </Text>
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                {`Envie d'explorer le Bénin? De découvrir notre culture, nos mets,
                nos langues ou simplement se connecter à l'histoire de nos
                villes. Démarrez votre exploration des villes du Bénin
                maintenant.`}
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Link href={"/towns/cotonou"} passHref>
                  <Button
                    rounded={"0"}
                    bg={"yellow.500"}
                    color={"white"}
                    _hover={{
                      bg: "yellow.600"
                    }}
                  >
                    Découvrir
                  </Button>
                </Link>
                {/* <Link href={"/about"} passHref>
                  <Button
                    rounded={"0"}
                    bgColor={"gray.400"}
                    _hover={{
                      bg: "gray.500"
                    }}
                  >
                    A propos
                  </Button>
                </Link> */}
              </Stack>
              <Subscribe />
            </Stack>
          </Flex>
          <Flex flex={1} pl={["30px", "0"]} pr={["30px", "0"]}>
            <Image
              alt={"Login Image"}
              objectFit={"cover"}
              src={"https://benin-travel.vercel.app/images/abomey.png"}
            />
          </Flex>
        </Stack>
      </Box>
    </AppLayout>
  )
}

export default Home
