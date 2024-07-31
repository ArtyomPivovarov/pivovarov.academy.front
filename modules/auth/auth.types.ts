import type { UserInfoDto } from '~/modules/user/user.types'

export type AuthSession = {
  user: UserInfoDto
  accessToken: string
  refreshToken: string
}
