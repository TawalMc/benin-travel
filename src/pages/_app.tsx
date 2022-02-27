import { theme } from "@/theme/index"
import * as ga from "@/utils/gtag"
import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouterChange = (url: string) => {
      ga.pageView(url)
    }

    router.events.on("routeChangeComplete", handleRouterChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouterChange)
    }
  }, [router.events])

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
