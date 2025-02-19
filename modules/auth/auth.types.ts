import type { UserInfo } from '~/modules/users/users.types'

export type AuthSession = {
  user: UserInfo
  accessToken: string
  refreshToken: string
}
