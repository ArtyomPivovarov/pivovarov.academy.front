import type { AuthSession } from '~/modules/auth/auth.types'

export default defineEventHandler(async event => {
  const session = await getUserSession(event)
  const runtimeConfig = useRuntimeConfig()

  if (!session.refreshToken) {
    throw createError({
      statusCode: 401,
      statusMessage: 'No refresh token'
    })
  }

  const response = (await $fetch(
    runtimeConfig.public.apiUrl + '/auth/refresh',
    {
      method: 'POST',
      body: await readBody(event),
      headers: {
        authorization: `Bearer ${session.refreshToken}`
      }
    }
  )) as unknown as AuthSession

  await setUserSession(event, response)

  return response
})
