export default defineEventHandler(async event => {
  // const response = (await $fetch(runtimeConfig.public.apiUrl + '/auth/logout', { TODO
  //   method: 'POST'
  // })) as unknown as AuthSession

  await clearUserSession(event)

  return {
    status: 200
  }
})
