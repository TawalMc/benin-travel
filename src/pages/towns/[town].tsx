import { Caroussel } from "@/components/Caroussel"
import { Loading } from "@/components/Loading"
import { TownList } from "@/data/towns"
import { getAllTowns, getExistingTowns } from "@/utils/contentfulAPI"
import { useTown } from "@/utils/state"
import { CarousselTown } from "@/utils/type"
import { VStack } from "@chakra-ui/react"
import { AppLayout } from "layouts/AppLayouts"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"

type TownProps = { townData: CarousselTown; townsList: string[] }

const Town: NextPage<TownProps> = (props) => {
  const router = useRouter()
  const actions = useTown()[1]

  useEffect(() => {
    actions.updateTownsList(props.townsList)
  }, [router.isFallback])

  if (router.isFallback) return <Loading />

  return (
    <AppLayout>
      <VStack h={"100vh"} w={"100%"}>
        <Caroussel {...props.townData} />
      </VStack>
    </AppLayout>
  )
}

export default Town

export const getStaticPaths: GetStaticPaths = async () => {
  const townList = await getExistingTowns()

  const paths = townList.map((town) => ({
    params: { town: town.toLowerCase() }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const towns = await getAllTowns()
  const townData = towns.find((elt) => elt.town.toLowerCase() === params!!.town)

  return {
    props: { townData: townData || null, townsList: TownList },
    revalidate: 1
  }
}
