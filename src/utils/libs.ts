import { CarousselTownChild, StateType } from "@/utils/type"
import axios from "axios"

import { TownState } from "./type"

export const updateIndex = (nextIndex: number, length: number) => {
  if (nextIndex >= length) return 0
  else if (nextIndex < 0) return length - 1
  return nextIndex
}

export const numberDaysBetweenDates = (date1: Date, date2: Date): number => {
  let diffTime = date2.getTime() - date1.getTime()
  return Math.floor(diffTime / (1000 * 3600 * 24))
}

export const getDepartmentState = (towns: TownState[]): StateType => {
  if (towns.findIndex((town) => town.state === "new") >= 0) return "new"
  else if (towns.findIndex((town) => town.state === "available") >= 0)
    return "available"
  return "coming soon"
}

export const extractImgList = (list: CarousselTownChild[]) => {
  const imgList = list.map((elt) => elt.img)
  return imgList
}

export const getTownIndex = (town: string, townList: string[]): number => {
  return townList.findIndex((elt) => elt === town)
}

export const fetcher = (url: string) => axios.get(url).then((res) => res.data)
