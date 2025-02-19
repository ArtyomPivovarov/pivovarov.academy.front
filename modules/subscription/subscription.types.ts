import type { UserInfo } from '~/modules/users/users.types'

export interface Subscription {
  id: number
  user: UserInfo
  type: SubscriptionType
  startDate: Date
  endDate: Date
  createdAt: string
  updatedAt: string
}

export interface SubscriptionType {
  id: number
  title: string
  slug: string
  level: number
  price: number
  period: string
  description: string
  createdAt: string
  updatedAt: string
}