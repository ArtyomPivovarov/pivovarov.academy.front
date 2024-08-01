import { AuthSession } from '~/modules/auth/auth.types'

export default defineEventHandler(async event => {
  const session = await getUserSession(event)
  if (!session.refreshToken) {
    throw createError({
      statusCode: 401,
      statusMessage: 'No refresh token'
    })
  }

  const response = (await $fetch(process.env.API_URL + '/auth/refresh', {
    method: 'POST',
    body: await readBody(event),
    headers: {
      authorization: `Bearer ${session.refreshToken}`
    }
  })) as unknown as AuthSession

  await setUserSession(event, response)

  return {
    status: 200,
    body: response
  }
})
