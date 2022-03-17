import { Header } from "@/components/Header"

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
