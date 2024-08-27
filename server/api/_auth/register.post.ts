import type { AuthSession } from '~/modules/auth/auth.types'

export default defineEventHandler(async event => {
  const runtimeConfig = useRuntimeConfig()
  const response = (await $fetch(
    runtimeConfig.public.apiUrl + '/auth/register',
    {
      method: 'POST',
      body: await readBody(event)
    }
  )) as unknown as AuthSession

  await setUserSession(event, response)

  return {
    status: 200
  }
})
