import { useQuery } from '@tanstack/vue-query'
import type { UserInfoDto } from '~/modules/users/users.types'

export function useUsers() {
  const { $api } = useNuxtApp()

  return useQuery({
    queryKey: ['users'],
    queryFn: () =>
      $api('/user', {
        params: {
          page: 1,
          limit: 10
        }
      }) as Promise<UserInfoDto[]>
  })
}
