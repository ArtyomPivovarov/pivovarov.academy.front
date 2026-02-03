import type { UserSession } from '#auth-utils'
import { mockUser } from '~/utils/mocks'

/**
 * Composable for getting mock session
 */
export function useMockSession(): UserSession {
  return {
    user: mockUser,
    accessToken: 'mock-access-token',
    refreshToken: 'mock-refresh-token',
  }
}
