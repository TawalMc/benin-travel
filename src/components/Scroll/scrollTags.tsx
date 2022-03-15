import { Tag } from "@chakra-ui/tag"

type ScrollTagsProps = {
  tags?: string[]
  numberTags?: number
}

const TagsColors = [
  "purple",
  "orange",
  "blue",
  "cyan",
  "green",
  "pink",
  "teal",
  "red"
]

export const ScrollTags = (props: ScrollTagsProps) => {
  const tagsList = props.tags?.slice(0, props.numberTags)

  return (
    <>
      {props.tags?.length !== 0 &&
        tagsList?.map((tag, index) => (
          <Tag
            size={"sm"}
            variant={"solid"}
            borderRadius={"full"}
            colorScheme={TagsColors[index]}
            m={2}
          >
            {tag}
          </Tag>
        ))}
    </>
  )
}
