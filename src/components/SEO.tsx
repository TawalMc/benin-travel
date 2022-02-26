import { SEOLinks, websiteLinks } from "@/utils/constants"
import Head from "next/head"
import { useRouter } from "next/router"

export type SEOProps = {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
}

export const SEO = ({
  description = SEOLinks.description,
  keywords = SEOLinks.keywords,
  title = SEOLinks.title,
  ogImage = SEOLinks.ogImage,
  ogUrl = websiteLinks.productionUrl,
  twitterImage = SEOLinks.twitterImage
}: SEOProps) => {
  const router = useRouter()

  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SEOLinks.title} />
      <meta property="og:url" content={`${ogUrl}${router.asPath}`} />
      <meta property="og:type" content={"website"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
