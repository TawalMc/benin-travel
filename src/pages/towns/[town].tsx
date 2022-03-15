import { Loading } from "@/components/Loading"
import { NavigationButtons } from "@/components/NavigationButtons"
import { SEO } from "@/components/SEO"
import { ScrollCard } from "@/components/Scroll/ScrollCard"
import { APP_DATA, SEOLinks } from "@/utils/constants"
import { getAllTowns, getExistingTowns } from "@/utils/contentfulAPI"
import { extractImgList, getTownIndex, updateIndex } from "@/utils/libs"
import { useTown } from "@/utils/state"
import { CarousselTown } from "@/utils/type"
import { Box, List, VStack } from "@chakra-ui/react"
import { AppLayout } from "layouts/AppLayouts"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

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
      <NavigationButtons changeTown={changeTown} />
      <Box
        w={"100vw"}
        h={"100vh"}
        overflow={"hidden"}
        overflowY={"scroll"}
        px={"2vw"}
      >
        {props.townData.children.map((child, index) => (
          <ScrollCard
            top={{ ...child, town: props.townData.town }}
            bottom={{ ...props.townData, ...child }}
            key={props.townData.children[index].img}
          />
        ))}
      </Box>
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
