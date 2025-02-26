import { UserSession } from '#auth-utils'

export default defineNitroPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  sessionHooks.hook('fetch', async (session, event) => {
    try {
      const response = await $fetch<UserSession>(
        runtimeConfig.public.apiUrl + '/auth/me',
        {
          headers: {
            Authorization: `Bearer ${session.accessToken}`
          }
        }
      )

      await setUserSession(event, response)
    } catch (e) {
      console.log(e)
      await clearUserSession(event)
    }
  })

  sessionHooks.hook('clear', async (session, event) => {
    console.log('clear')
    // todo clear user session
  })
})
