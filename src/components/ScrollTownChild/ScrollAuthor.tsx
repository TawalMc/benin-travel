import { Link } from "@chakra-ui/react"

type ScrollAuthorProps = {
  author: string
  authorLink: string
}

export const ScrollAuthor = (props: ScrollAuthorProps) => {
  return (
    <>
      {props.author !== "any" && (
        <Link
          color={"#000"}
          href={props.authorLink}
          isExternal
          fontStyle={"italic"}
          fontSize={"sm"}
          fontWeight={"bold"}
          textTransform={"lowercase"}
        >
          @{props.author}
        </Link>
      )}
    </>
  )
}
