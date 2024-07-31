import type { NuxtApp } from '#app'
import type { AuthSession } from '~/modules/auth/auth.types'

export default defineNuxtPlugin({
  name: 'auth',
  setup: nuxtApp => {
    const baseUrl = 'auth'
    const { fetch: fetchSession } = useUserSession()
    const { $api } = useNuxtApp()

    return {
      provide: {
        auth: {
          login: async (body: { email: string; password: string }) => {
            await $fetch(`/api/_auth/login`, {
              method: 'POST',
              body
            })
            await fetchSession()
          },
          register: async (body: { email: string; password: string }) => {
            await $fetch(`/api/_auth/register`, {
              method: 'POST',
              body
            })
            await fetchSession()
          },
          logOut: async () => {
            await $fetch(`/api/_auth/logout`, { method: 'POST' })
            await fetchSession()
          }
        }
      }
    }
  }
})
