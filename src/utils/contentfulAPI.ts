import { CarousselTown } from "@/utils/type"
import { Asset, Entry, createClient } from "contentful"

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = createClient({
  space: space!,
  accessToken: accessToken!
})

export const getAllTowns = async (): Promise<CarousselTown[]> => {
  const entries = await client.getEntries({
    content_type: "town"
  })

  const preTowns = entries.items.map((elt) => elt.fields)
  const towns = preTowns.map((elt) => formatContentfulResponse(elt))
  return towns
}

type ChildrenTownContentful = Entry<{ description: string; img: Asset }>

const formatContentfulResponse = (data: any): CarousselTown => {
  const getChildren = (elt: ChildrenTownContentful) => {
    return {
      description: elt.fields.description,
      img: `https:${elt.fields.img.fields.file.url}`
    }
  }

  const town: CarousselTown = {
    country: data.country,
    town: data.town,
    department: data.department,
    type: data.type,
    people: data.people,
    language: data.language,
    district: data.district,
    food: data.food,
    children: data.children.map((elt: ChildrenTownContentful) =>
      getChildren(elt)
    )
  }

  return town
}
