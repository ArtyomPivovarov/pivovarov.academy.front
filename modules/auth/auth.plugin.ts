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
            return $fetch(`/api/_auth/register`, {
              method: 'POST',
              body
            })
          },
          verifyEmail: async (body: { code: string }) => {
            return $api('/verify-email', {
              method: 'POST',
              body
            })
          },
          resendCode: async (body: { email: string }) => {
            return $api('/resend-code', {
              method: 'POST',
              body
            })
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
