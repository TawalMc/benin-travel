import { StateType } from "@/utils/type"

import { TownState } from "./type"

export const updateIndex = (currIndex: number, length: number) => {
  if (currIndex > length - 1) return 0
  else if (currIndex < 0) return length - 1
  return currIndex
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
