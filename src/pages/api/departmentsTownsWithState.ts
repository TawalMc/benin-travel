import { getDepartmentsTownsWithState } from "@/utils/contentfulAPI"
import { DepartmentTownsState } from "@/utils/type"
import { NextApiRequest, NextApiResponse } from "next"

type NextApiResponseType = NextApiResponse & DepartmentTownsState[]

export const departmentsTownsWithState = async (
  req: NextApiRequest,
  res: NextApiResponseType
) => {
  try {
    let depTownsState = await getDepartmentsTownsWithState()
    return res.status(200).json(depTownsState)
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

export default departmentsTownsWithState
