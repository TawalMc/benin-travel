import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    body: "Comfortaa, cursive",
    html: "Comfortaa, cursive",
    heading: "Comfortaa, cursive"
  },
  styles: {
    global: {
      "html, body, #__next": {
        height: "100%"
      },
      "#__next": {
        display: "flex",
        flexDirection: "column"
      }
    }
  }
})
