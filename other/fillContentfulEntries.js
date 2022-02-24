// simple script to fill entries of list of benin towns and departments on contentful
const contentful = require("contentful-management")
const axios = require("axios").default

const accessToken = process.env.CONTENTFUL_CONTENT_MANGEMENT_API_KEY
const baseUrlBeninAPI = "https://bj-decoupage-territorial.herokuapp.com/api/v1"

const client = contentful.createClient({
  accessToken: accessToken
})

const getListOfBeninTowns = async () => {
  try {
    const res = await axios.get(`${baseUrlBeninAPI}/towns`)
    if (res.status === 200) {
      const towns = res.data.towns.map((elt) => {
        let townLower = elt.name.toLowerCase()
        townLower = townLower.replace(townLower[0], townLower[0].toUpperCase())
        return townLower
      })

      const space = await client.getSpace("h4grvz8chvda")
      const environment = await space.getEnvironment("master")
      const entry = await environment.getEntry("6DH7tHZaEIKbiTfFHxim0K")
      entry.fields.townList["en-US"] = towns
      entry.update()
    }
  } catch (error) {
    console.error(error)
  }
}
