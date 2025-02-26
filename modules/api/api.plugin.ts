export default defineNuxtPlugin({
  name: 'api',
  setup: nuxtApp => {
    const { $auth } = useNuxtApp()
    const { session, clear } = useUserSession()
    let refreshPromise: Promise<void> | null = null

    const $api = $fetch.create({
      baseURL: '/backend-api',
      async onRequest({ options }) {
        if (refreshPromise) {
          await refreshPromise
        }

        if (session.value.accessToken) {
          const headers = (options.headers ||= {})
          if (Array.isArray(headers)) {
            headers.push([
              'Authorization',
              `Bearer ${session.value.accessToken}`
            ])
          } else if (headers instanceof Headers) {
            headers.set('Authorization', `Bearer ${session.value.accessToken}`)
          } else {
            headers.Authorization = `Bearer ${session.value.accessToken}`
          }
        }
      },
      async onResponseError({ response, request }) {
        if (response.status === 401 && session.value.refreshToken) {
          try {
            if (!refreshPromise) {
              refreshPromise = $auth.refresh()
            }
            await refreshPromise

            const newRequest = new Request(request)
            newRequest.headers.set(
              'Authorization',
              `Bearer ${session.value.accessToken}`
            )

            return $fetch(newRequest)
          } catch (error) {
            await clear()
            await nuxtApp.runWithContext(() =>
              navigateTo({ query: { auth: 'true' } })
            )
          } finally {
            refreshPromise = null
          }
        }
      }
    })

    return {
      provide: {
        api: $api
      }
    }
  }
})
