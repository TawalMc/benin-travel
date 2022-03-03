// simple script to fill entries of list of benin towns and departments on contentful
const contentful = require("contentful-management")
const axios = require("axios").default

const accessToken = `${process.env.CONTENTFUL_CONTENT_MANGEMENT_API_KEY}`
const baseUrlBeninAPI = "https://bj-decoupage-territorial.herokuapp.com/api/v1"

const client = contentful.createClient({
  accessToken: accessToken
})

const fillListOfBeninTowns = async () => {
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

const extractDataName = (list) => {
  const towns = list.map((elt) => {
    let townLower = elt.name.toLowerCase()
    townLower = townLower.replace(townLower[0], townLower[0].toUpperCase())
    return townLower
  })

  return towns
}

const createContentfulEntry = async (dep, country, towns) => {
  const space = await client.getSpace("h4grvz8chvda")
  const environment = await space.getEnvironment("master")
  const entry = await environment.createEntry("departmentTowns", {
    fields: {
      department: {
        "en-US": dep
      },
      country: {
        "en-US": country
      },
      townsList: {
        "en-US": towns
      }
    }
  })

  entry.publish()
}

const fillListOfBeninDepartmentTowns = async () => {
  try {
    const res = await axios.get(`${baseUrlBeninAPI}/departments`)
    if (res.status === 200) {
      const departments = res.data.departments.map((elt) => {
        let departmentLower = elt.name.toLowerCase()
        departmentLower = departmentLower.replace(
          departmentLower[0],
          departmentLower[0].toUpperCase()
        )

        return departmentLower
      })

      for (const dep of departments) {
        const res2 = await axios.get(
          `${baseUrlBeninAPI}/departments/${dep}/towns`
        )
        const towns = extractDataName(res2.data.towns)
        await createContentfulEntry(dep, "Bénin", towns)
      }
    }
  } catch (error) {
    console.log(error)
  }
}
