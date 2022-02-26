import { SEO } from "@/components/SEO"
import { SEOLinks } from "@/utils/constants"
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

const About: NextPage = () => {
  return (
    <AppLayout>
      <SEO
        title={`About | ${SEOLinks.title}`}
        description={`About | ${SEOLinks.description}`}
      />
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
                    bg: "green.500",
                    zIndex: -1
                  }}
                >
                  Benin
                </Text>
                <br />
                <Text color={"green.500"} as={"span"}>
                  Découvertes et merveilles
                </Text>
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                Cette plateforme a pour but de promouvoir la culture et la
                découverte du Bénin. Défilez calmement les pages (communes) pour
                en savoir un peu plus sur les villes de ce pays et ceci
                gratuitement, sans publicité.
              </Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                Le projet a été développé par{" "}
                <Text as={"span"} fontWeight={"bold"} color={"#000000"}>
                  Tawaliou ALAO
                </Text>
                , développeur web béninois qui tente de faire connaître son pays
                au monde entier. Retrouvez dans le coin droit inférieur, les
                liens vers mes comptes sociaux.
              </Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                Désolé pour le chargement des images, un peu trop lourdes
                (ékpin).
              </Text>
              <Text fontStyle={"italic"} color={"gray.500"}>
                Pleins de fonctionnalités à venir
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Link href={"/"} passHref>
                  <Button
                    rounded={"0"}
                    bgColor={"gray.400"}
                    _hover={{
                      bg: "gray.500"
                    }}
                  >
                    Home
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={"Login Image"}
              objectFit={"cover"}
              src={
                "https://tawaldevuniverse.vercel.app/static/images/myphoto.png"
              }
            />
          </Flex>
        </Stack>
      </Box>
    </AppLayout>
  )
}

export default About
