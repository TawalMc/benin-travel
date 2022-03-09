import { VStack } from "@chakra-ui/react"
import Image from "next/image"
import { useRouter } from "next/router"
import { EffectCards } from "swiper"
import "swiper/css"
import "swiper/css/effect-cards"
import { Swiper, SwiperSlide } from "swiper/react"

const carousselStyle = (w?: string, h?: string) => ({
  width: w ?? "250px",
  height: h ?? "330px"
})

const carousselSlideStyle = (color?: string, bgColor?: string) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "18px",
  fontSize: "22px",
  fontWeight: "bold",
  color: color ?? "#fff",
  backgroundColor: bgColor ?? "rgba(90, 90, 90, 0.4)",
  backdropFilter: "blur(10px) hue-rotate(90deg)"
})

type CarousselImagesCardsProps = {
  imgList: string[]
  updateCarousselImgIndex: (newIndex?: number) => void
}

export const CarousselImagesCards = (props: CarousselImagesCardsProps) => {
  const router = useRouter()
  console.log(router.asPath)

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      style={carousselStyle()}
      onSlideChange={(swiper) =>
        props.updateCarousselImgIndex(swiper.activeIndex)
      }
    >
      {props.imgList.map((img) => (
        <SwiperSlide style={carousselSlideStyle()} key={img}>
          <VStack
            w={"100%"}
            h={"100%"}
            justifyContent={"center"}
            bgColor={"inherit"}
          >
            <Image
              alt={`${router.asPath.split("/")[2]} images`}
              src={img}
              layout={"fill"}
            />
          </VStack>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
