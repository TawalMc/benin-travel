import { CarousselTown, DepartmentTownsState } from "@/utils/type"
import { Asset, Entry, createClient } from "contentful"

import { APP_DATA } from "./constants"
import { getDepartmentState, numberDaysBetweenDates } from "./libs"
import { StateType } from "./type"

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = createClient({
  space: space!,
  accessToken: accessToken!
})

const getExactDataFromCMS = async <T>(contentType: string): Promise<T[]> => {
  const entries = await client.getEntries<T>({
    content_type: contentType
  })

  const list = entries.items.map((elt) => elt.fields)
  return list
}

export const getAllTowns = async (): Promise<CarousselTown[]> => {
  const entries = await client.getEntries({
    content_type: "town"
  })
  // test
  // console.log(entries.items)
  //
  const preTowns = entries.items.map((elt) => elt.fields)
  const towns = preTowns.map((elt) => formatContentfulResponse(elt))
  return towns
}

/**
 *
 */
type GetTownListType = {
  country: string
  townList: string[]
}
export const getTownList = async (): Promise<string[]> => {
  const entries = await client.getEntries<GetTownListType>({
    content_type: "beninTowns"
  })

  const list = entries.items.map((elt) => elt.fields)
  return list[0].townList
}

export const getExistingTowns = async (): Promise<string[]> => {
  const list = await getAllTowns()
  const townList = list.map((elt) => elt.town)

  return townList
}

/**
 *
 */
type ChildrenTownContentfulType = Entry<{
  description: string
  img?: Asset
  author?: string
  authorLink?: string
}>
const formatContentfulResponse = (data: any): CarousselTown => {
  const getChildren = (elt: ChildrenTownContentfulType) => {
    return {
      description: elt.fields.description,
      author: elt.fields.author,
      authorLink: elt.fields.authorLink,
      img: `https:${elt.fields.img?.fields.file.url}`
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
    children: data.children.map((elt: ChildrenTownContentfulType) =>
      getChildren(elt)
    )
  }

  return town
}

/**
 *
 */

type DepartmentsTownsType = {
  country: string
  department: string
  townsList: string[]
}
export const getDepartmentsTowns = async (): Promise<
  DepartmentsTownsType[]
> => {
  const departmentTowns = await getExactDataFromCMS<DepartmentsTownsType>(
    "departmentTowns"
  )
  return departmentTowns
}

type TownsUpdateType = {
  country: string
  department: string
  town: string
  updateAt: string
}

export const getTownsUpdate = async (): Promise<TownsUpdateType[]> => {
  const entries = await client.getEntries<CarousselTown>({
    content_type: "town"
  })
  const townsUpdate = entries.items.map((elt) => {
    return {
      country: elt.fields.country,
      department: elt.fields.department,
      town: elt.fields.town,
      updateAt: elt.sys.updatedAt
    }
  })
  // console.log(townsUpdate)
  return townsUpdate
}

export const getDepartmentsTownsWithState = async (): Promise<
  DepartmentTownsState[]
> => {
  const departmentsTows = await getDepartmentsTowns()
  let townsUpdate = await getTownsUpdate()

  const departmentTownsState = departmentsTows.map((dep) => {
    const townsState = dep.townsList.map((town) => {
      const townIndex = townsUpdate.findIndex((tu) => tu.town === town)
      let townState: StateType = "coming soon"
      if (townIndex >= 0) {
        // exist
        townState = "available"

        // verify update date
        let date1 = new Date(townsUpdate[townIndex].updateAt)
        let date2 = new Date(Date.now())
        if (
          numberDaysBetweenDates(date1, date2) <= APP_DATA.maxDaysBetweenUpdate
        )
          townState = "new"

        townsUpdate.splice(townIndex, 1)
      }
      return {
        name: town,
        state: townState
      }
    })
    let depState: StateType = getDepartmentState(townsState)
    return {
      country: dep.country,
      department: dep.department,
      state: depState,
      townsList: townsState
    }
  })

  return departmentTownsState.reverse()
}
