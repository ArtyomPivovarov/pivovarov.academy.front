import type { UserSession } from '#auth-utils'

export default defineNuxtPlugin({
  name: 'auth',
  setup: nuxtApp => {
    const baseUrl = 'auth'
    const {
      fetch: fetchSession,
      session,
      clear: clearSession
    } = useUserSession()
    const { $api } = useNuxtApp()

    return {
      provide: {
        auth: {
          login: async (body: { email: string; password: string }) => {
            session.value = await $fetch<UserSession>(`/api/_auth/login`, {
              method: 'POST',
              body
            })
          },
          register: async (body: { email: string; password: string }) => {
            session.value = await $fetch<UserSession>(`/api/_auth/register`, {
              method: 'POST',
              body
            })
          },
          verifyEmail: async (body: { email: string; code: string }) => {
            session.value = await $fetch<UserSession>(
              '/backend-api/auth/verify-email',
              {
                method: 'POST',
                body
              }
            )
          },
          resendVerification: async (body: { email: string }) => {
            return $fetch('/backend-api/auth/resend-verification', {
              method: 'POST',
              body
            })
          },
          refresh: async () => {
            try {
              session.value = await $fetch<UserSession>('/api/_auth/refresh', {
                method: 'POST'
              })
            } catch (error) {
              await clearSession()
            }
          },
          logOut: async () => {
            await $fetch(`/api/_auth/logout`, { method: 'POST' })
            return clearSession()
          }
        }
      }
    }
  }
})
