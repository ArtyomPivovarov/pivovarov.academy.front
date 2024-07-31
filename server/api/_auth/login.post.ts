import { AuthSession } from '~/modules/auth/auth.types'

export default defineEventHandler(async event => {
  const response = (await $fetch(process.env.API_URL + '/auth/login', {
    method: 'POST',
    body: await readBody(event)
  })) as unknown as AuthSession

  await setUserSession(event, response)

  return {
    status: 200
  }
})
