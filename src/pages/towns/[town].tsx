import { CarousselAthorsAndButtons } from "@/components/Caroussel/carousselAuthorsAndButtons"
import { CarousselDescriptions } from "@/components/Caroussel/carousselDescriptions"
import { CarousselImagesCards } from "@/components/Caroussel/carousselImagesCards"
import { CarousselInformations } from "@/components/Caroussel/carousselInformations"
import { Loading } from "@/components/Loading"
import { SEO } from "@/components/SEO"
import { APP_DATA, SEOLinks } from "@/utils/constants"
import { getAllTowns, getExistingTowns } from "@/utils/contentfulAPI"
import { extractImgList, getTownIndex, updateIndex } from "@/utils/libs"
import { useTown } from "@/utils/state"
import { CarousselTown } from "@/utils/type"
import { VStack } from "@chakra-ui/react"
import { AppLayout } from "layouts/AppLayouts"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const textTest =
  "Cotonou est une grande ville portuaire située sur la côte sud du Bénin, en Afrique de l'Ouest. À l'extrémité orientale du boulevard central St. Michel se trouve l'immense marché Dantokpa."

type TownProps = { townData: CarousselTown; townsList: string[] }

const Town: NextPage<TownProps> = (props) => {
  const router = useRouter()
  const [state, actions] = useTown()
  const [currDescImg, setCurrDescImg] = useState<number>(0)

  useEffect(() => {
    if (state.townsList.length !== APP_DATA.benin_towns) {
      actions.updateTownsList(props.townsList)
    }
    actions.updateTown(getTownIndex(props.townData.town, props.townsList))
  })

  // console.log(state.currentIndex)

  const updateCarousselImgIndex = (newIndex?: number) => {
    setCurrDescImg(newIndex ?? 0)
  }

  const changeTown = (next: boolean) => {
    const unit = next ? 1 : -1
    const townIndex = updateIndex(
      state.currentIndex + unit,
      state.townsList.length
    )
    /* actions.updateTown(townIndex) */

    // console.log(`/towns/${state.townsList[townIndex].toLowerCase()}`)

    router.push(`/towns/${state.townsList[townIndex].toLowerCase()}`)
  }

  if (router.isFallback) return <Loading />

  return (
    <AppLayout>
      <SEO
        title={`Town: ${props.townData.town} | ${SEOLinks.title}`}
        description={`Et si on allait à la découverte de ${props.townData.town} | ${SEOLinks.title}`}
        twitterImage={props.townData.children[0].img}
        ogImage={props.townData.children[0].img}
      />
      <VStack
        w={"100%"}
        h={"100vh"}
        py={2}
        bgColor={"rgb(240,240,240)"}
        spacing={"1em"}
        backdropFilter={"blur(10px) hue-rotate(90deg)"}
      >
        <CarousselDescriptions
          description={props.townData.children[currDescImg].description}
          {...props.townData}
        />
        <CarousselImagesCards
          updateCarousselImgIndex={updateCarousselImgIndex}
          imgList={extractImgList(props.townData.children)}
        />
        <CarousselAthorsAndButtons
          changeTown={changeTown}
          {...props.townData.children[currDescImg]}
        />
        <CarousselInformations
          currDescImg={currDescImg + 1}
          totalDescImg={props.townData.children.length}
          {...props.townData}
        />
      </VStack>
    </AppLayout>
  )
}

export default Town

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
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }
}
