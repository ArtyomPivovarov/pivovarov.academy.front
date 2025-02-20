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

export type SubscriptionPeriod = 'month' | 'year' | string

export interface SubscriptionType {
  id: number
  title: string
  slug: string
  level: number
  price: number
  period: SubscriptionPeriod
  description: string
  createdAt: string
  updatedAt: string
}