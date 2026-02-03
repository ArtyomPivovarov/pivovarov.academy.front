import type { Subscription, SubscriptionType } from '~/modules/subscription/subscription.types'
import { mockUser } from './user.mock'

export const mockSubscriptionTypes: SubscriptionType[] = [
  {
    id: 1,
    title: 'Basic',
    slug: 'basic',
    level: 1,
    price: 990,
    period: 'month',
    description: 'Access to basic courses and materials',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 2,
    title: 'Basic',
    slug: 'basic',
    level: 1,
    price: 9990,
    period: 'year',
    description: 'Access to basic courses and materials',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 3,
    title: 'Pro',
    slug: 'pro',
    level: 2,
    price: 1990,
    period: 'month',
    description: 'Full access to all courses and intensives',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 4,
    title: 'Pro',
    slug: 'pro',
    level: 2,
    price: 19990,
    period: 'year',
    description: 'Full access to all courses and intensives',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
]

export const mockActiveSubscription: Subscription = {
  id: 1,
  user: mockUser,
  type: mockSubscriptionTypes[0], // Pro monthly
  startDate: new Date('2024-02-01'),
  endDate: new Date('2024-03-01'),
  createdAt: '2024-02-01T00:00:00.000Z',
  updatedAt: '2024-02-01T00:00:00.000Z',
}
