import mailchimp from "@mailchimp/mailchimp_marketing"
import { NextApiRequest, NextApiResponse } from "next"

const audienceID = process.env.MAILCHIMP_AUDIENCE_ID as string
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER
})

export const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  if (!email) return res.status(400).json({ error: "Email est requise" })

  try {
    await mailchimp.lists.addListMember(audienceID, {
      email_address: email,
      status: "subscribed"
    })

    return res.status(201).json({ error: "" })
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

export default subscribe
