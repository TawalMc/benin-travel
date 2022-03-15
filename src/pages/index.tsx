import { ParticlesEffect } from "@/components/Particles"
import { SEO } from "@/components/SEO"
import { SocialMedia } from "@/components/SocialMedia"
import { Subscribe } from "@/components/Subscribe"
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react"
import { AppLayout } from "layouts/AppLayouts"
import type { NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <AppLayout>
      <SEO />
      <Box
        width={"100vw"}
        height={"100vh"}
        color={"white"}
        overflowX={"hidden"}
      >
        <Stack
          py={{ base: "10", md: "5" }}
          px={{ base: "10", md: "40" }}
          align={"center"}
          justify={{ base: "center", md: "flex-start" }}
          h={"100vh"}
          w={"100vw"}
          direction={{ base: "column", md: "row" }}
          bgImage={
            "linear-gradient(rgb(90, 90, 90, 0.5), rgba(0, 0, 0, 0.5)), url(https://benin-travel.vercel.app/images/abomey.png)"
          }
          bgAttachment={{ base: "scroll", md: "fixed" }}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          bgColor={"black"}
        >
          <ParticlesEffect />
          <Stack spacing={6} w={"full"} maxW={"lg"} color={"white"}>
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              paddingTop={"8px"}
            >
              <Text as={"span"}>Benin</Text>
              <br />
              <Text color={"yellow.500"} as={"span"}>
                Découvertes et merveilles
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} /* color={"gray.500"} */>
              {`Envie d'explorer le Bénin? De découvrir notre culture, nos mets,
                nos langues ou simplement se connecter à l'histoire de nos
                villes.`}
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Link href={"/towns/cotonou"} passHref>
                <Button
                  px={"30px"}
                  borderWidth={"2px"}
                  borderColor={"yellow.500"}
                  borderRadius={"50"}
                  bg={"yellow.500"}
                  color={"white"}
                  _hover={{
                    bg: "none"
                  }}
                  _active={{
                    bg: "none"
                  }}
                >
                  Découvrir
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          py={{ base: "10", md: "5" }}
          px={{ base: "10", md: "40" }}
          align={"center"}
          direction={"column"}
          color={"black"}
          w={"100vw"}
          bgColor={"#f1f3f3"}
        >
          <Box>
            <Subscribe />
          </Box>
          <Box>
            <SocialMedia />
          </Box>
        </Stack>
      </Box>
    </AppLayout>
  )
}

export default Home
