import { Caroussel } from "@/components/Caroussel"
import { Loading } from "@/components/Loading"
import { SEO } from "@/components/SEO"
import { SEOLinks } from "@/utils/constants"
import { getAllTowns, getExistingTowns } from "@/utils/contentfulAPI"
import { useTown } from "@/utils/state"
import { CarousselTown } from "@/utils/type"
import { VStack } from "@chakra-ui/react"
import { AppLayout } from "layouts/AppLayouts"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"

type TownProps = { townData: CarousselTown; townsList: string[] }

const Town: NextPage<TownProps> = (props) => {
  const router = useRouter()
  const actions = useTown()[1]

  useEffect(() => {
    actions.updateTownsList(props.townsList)
  })

  if (router.isFallback) return <Loading />

  return (
    <AppLayout>
      <SEO
        title={`Town: ${props.townData.town} | ${SEOLinks.title}`}
        description={`Et si on allait à la découverte de ${props.townData.town} | ${SEOLinks.title}`}
      />
      <VStack h={"100vh"} w={"100%"}>
        <Caroussel {...props.townData} />
      </VStack>
    </AppLayout>
  )
}

export default Town

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const towns = await getAllTowns()
  const townList = await getExistingTowns()
  const townData = towns.find((elt) => elt.town.toLowerCase() === params!!.town)

  return {
    props: { townData: townData || null, townsList: townList }
  }
}
