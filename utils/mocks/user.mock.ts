import type { UserInfo } from '~/modules/users/users.types'

export const mockUser: UserInfo = {
  id: 1,
  email: 'demo@pivovarov.academy',
  role: 'user',
  createdAt: '2024-01-15T10:00:00.000Z',
  updatedAt: '2024-01-15T10:00:00.000Z',
}

export const mockUserPremium: UserInfo = {
  id: 2,
  email: 'premium@pivovarov.academy',
  role: 'premium',
  createdAt: '2024-01-15T10:00:00.000Z',
  updatedAt: '2024-01-15T10:00:00.000Z',
}
