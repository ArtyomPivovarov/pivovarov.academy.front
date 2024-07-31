import type { UserInfoDto } from '~/modules/users/users.types'

export type AuthSession = {
  user: UserInfoDto
  accessToken: string
  refreshToken: string
}
