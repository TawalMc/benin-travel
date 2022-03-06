import {
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import { RiSendPlaneFill } from "react-icons/ri"

export const Subscribe = () => {
  const inputEl = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState("")

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log("salut")

    const res = await fetch("api/subscribe", {
      body: JSON.stringify({ email: inputEl.current!!.value }),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    })

    const { error } = await res.json()

    if (error) {
      setMessage(error)
      return
    }

    inputEl.current!.value = ""
    setMessage("🎉 Vous êtes maintenant inscrit à la newsletter.")
  }

  return (
    <FormControl>
      <FormLabel color={"#000000"} fontWeight={"bold"}>
        Souscrire à la newsletter
      </FormLabel>
      <FormHelperText lineHeight={1.5} mb={"8px"}>
        Recevez des mails sur les mises à jour de Benin Travel
      </FormHelperText>
      <InputGroup size={"md"}>
        <Input
          pr={"4.5rem"}
          type={"email"}
          placeholder={"Votre email"}
          color={"#000000"}
          colorScheme={"#000000"}
          rounded={"0"}
          _focus={{
            borderColor: "gray.400"
          }}
          ref={inputEl}
          required
          name={"email"}
        />
        <InputRightElement w={"10%"}>
          <IconButton
            h={"99%"}
            bgColor={"yellow.500"}
            rounded={"0"}
            w={"100%"}
            _hover={{
              bgColor: "yellow.600"
            }}
            type={"submit"}
            onClick={(e) => subscribe(e)}
            aria-label={"Subscribe to newsletter"}
            icon={<RiSendPlaneFill />}
          />
        </InputRightElement>
      </InputGroup>
      {message.length !== 0 && <FormHelperText>{message}</FormHelperText>}
    </FormControl>
  )
}
