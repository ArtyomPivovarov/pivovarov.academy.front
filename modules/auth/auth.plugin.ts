import type { UserSession } from '#auth-utils'

export default defineNuxtPlugin({
  name: 'auth',
  setup: nuxtApp => {
    const {
      session,
      clear: clearSession
    } = useUserSession()
    const config = useRuntimeConfig()
    const isMockMode = config.public.mockMode === true || config.public.mockMode === 'true'

    return {
      provide: {
        auth: {
          login: async (body: { email: string; password: string }) => {
            if (isMockMode) {
              session.value = useMockSession()
              return
            }
            
            session.value = await $fetch<UserSession>(`/api/_auth/login`, {
              method: 'POST',
              body
            })
          },
          register: async (body: { email: string; password: string }) => {
            if (isMockMode) {
              session.value = useMockSession()
              return
            }
            
            session.value = await $fetch<UserSession>(`/api/_auth/register`, {
              method: 'POST',
              body
            })
          },
          verifyEmail: async (body: { email: string; code: string }) => {
            if (isMockMode) {
              return
            }
            
            session.value = await $fetch<UserSession>(
              '/backend-api/auth/verify-email',
              {
                method: 'POST',
                body
              }
            )
          },
          resendVerification: async (body: { email: string }) => {
            if (isMockMode) {
              return
            }
            
            return $fetch('/backend-api/auth/resend-verification', {
              method: 'POST',
              body
            })
          },
          refresh: async () => {
            if (isMockMode) {
              return
            }
            
            try {
              session.value = await $fetch<UserSession>('/api/_auth/refresh', {
                method: 'POST'
              })
            } catch (error) {
              await clearSession()
            }
          },
          logOut: async () => {
            if (isMockMode) {
              return clearSession()
            }
            
            await $fetch(`/api/_auth/logout`, { method: 'POST' })
            return clearSession()
          }
        }
      }
    }
  }
})
