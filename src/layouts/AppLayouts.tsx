import { Header } from "@/components/Header"
import React from "react"

type AppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
