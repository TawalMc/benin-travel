export type NavItem = {
  label: string
  href?: string
}

export type FirstPartTown = {
  country: string
  town: string
  department: string
  type: string
  people: string
  language: string[]
}

export type SecondPartTown = {
  district: number
  food: string
}

export type AuthorCredit = {
  author: string
  authorLink: string
}

export type CarousselTownChild = AuthorCredit & {
  description: string
  img?: string
}

export type CarousselTown = FirstPartTown &
  SecondPartTown & {
    children: CarousselTownChild[]
  }
