import { Profile } from 'src/app/shared/types/profile'

export interface Article {
  title: string
  slug: string
  body: string
  createdAt: string
  updatedAt: string
  tagList: string[]
  description: string,
  author: Profile
  favorited: boolean,
  favoritesCount: number
}
