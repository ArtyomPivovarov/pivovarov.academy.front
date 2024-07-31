import type { NuxtApp } from '#app'
import type { AuthSession } from '~/modules/auth/auth.types'

export default defineNuxtPlugin({
  name: 'auth',
  setup: nuxtApp => {
    const baseUrl = 'auth'
    const { $api } = useNuxtApp()

    return {
      provide: {
        auth: {
          login: (body: { email: string; password: string }) =>
            $fetch(`/api/_auth/login`, {
              method: 'POST',
              body
            }) as Promise<AuthSession>,
          register: async (data: { email: string; password: string }) =>
            $api(`${baseUrl}/register`, {
              method: 'POST',
              data
            }) as Promise<AuthSession>
        }
      }
    }
  }
})
