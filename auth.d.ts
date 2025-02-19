import type { AuthSession } from '~/modules/auth/auth.types'
import type { UserInfo } from '~/modules/users/users.types'

declare module '#auth-utils' {
  interface User extends UserInfo {}

  interface UserSession extends AuthSession {}
}

export {}
