import type { AuthSession } from '~/modules/auth/auth.types'
import type { UserInfoDto } from '~/modules/user/user.types'

declare module '#auth-utils' {
  interface User extends UserInfoDto {}

  interface UserSession extends AuthSession {}
}

export {}
