import { Article } from 'src/app/shared/types/article'

export interface FeedResponse {
  articles: Article[]
  articlesCount: number
}
