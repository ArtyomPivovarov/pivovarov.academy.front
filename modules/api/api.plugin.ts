export default defineNuxtPlugin({
  name: 'api',
  setup: nuxtApp => {
    const { session, clear, fetch: fetchSession } = useUserSession()
    let refreshPromise: Promise<void> | null = null

    const $api = $fetch.create({
      baseURL: '/backend-api',
      async onRequest({ request, options, error }) {
        if (refreshPromise) {
          await refreshPromise
          await fetchSession()
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
              refreshPromise = $fetch('/api/_auth/refresh', {
                method: 'post'
              })
            }
            await refreshPromise
            await fetchSession()

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
