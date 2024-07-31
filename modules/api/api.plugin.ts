export default defineNuxtPlugin({
  name: 'api',
  setup: nuxtApp => {
    const { session, clear, fetch } = useUserSession()

    const $api = $fetch.create({
      baseURL: '/backend-api',
      onRequest({ request, options, error }) {
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
      async onResponseError({ response }) {
        if (response.status === 401) {
          await clear()
          await nuxtApp.runWithContext(() =>
            navigateTo({ query: { auth: 'true' } })
          )
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
