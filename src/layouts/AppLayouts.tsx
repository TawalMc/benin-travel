import { Header } from "@/components/Header"
import { SocialMedia } from "@/components/SocialMedia"
import React from "react"

type AppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <SocialMedia />
      {children}
    </>
  )
}
