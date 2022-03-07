import { CarousselAthorsAndButtons } from "@/components/Caroussel/carousselAuthorsAndButtons"
import { CarousselDescriptions } from "@/components/Caroussel/carousselDescriptions"
import { CarousselImagesCards } from "@/components/Caroussel/carousselImagesCards"
import { CarousselInformations } from "@/components/Caroussel/carousselInformations"
import { SEO } from "@/components/SEO"
import { SEOLinks } from "@/utils/constants"
import { getAllTowns, getExistingTowns } from "@/utils/contentfulAPI"
import { VStack } from "@chakra-ui/react"
import { AppLayout } from "layouts/AppLayouts"
import { GetServerSideProps, NextPage } from "next"

const textTest =
  "Cotonou est une grande ville portuaire située sur la côte sud du Bénin, en Afrique de l'Ouest. À l'extrémité orientale du boulevard central St. Michel se trouve l'immense marché Dantokpa."

export const SwiperImages: NextPage = () => {
  return (
    <AppLayout>
      {/* <SEO
        title={`Town: ${props.townData.town} | ${SEOLinks.title}`}
        description={`Et si on allait à la découverte de ${props.townData.town} | ${SEOLinks.title}`}
        twitterImage={props.townData.children[0].img}
        ogImage={props.townData.children[0].img}
      /> */}
      <VStack
        w={"100%"}
        h={"100vh"}
        py={2}
        bgColor={"rgb(240,240,240)"}
        spacing={"4%"}
        backdropFilter={"blur(10px) hue-rotate(90deg)"}
      >
        <CarousselDescriptions description={textTest} />
        <CarousselImagesCards />
        <CarousselAthorsAndButtons />
        <CarousselInformations />
      </VStack>
    </AppLayout>
  )
}

export default SwiperImages

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const towns = await getAllTowns()
    const townList = await getExistingTowns()
    const townData = towns.find(
      (elt) => elt.town.toLowerCase() === params!!.town
    )

    return {
      props: { townData: townData || null, townsList: townList }
    }
  } catch (error) {
    // console.log(error)
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }
}
