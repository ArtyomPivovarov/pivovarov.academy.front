export default defineEventHandler(async event => {
  // const response = (await $fetch(process.env.API_URL + '/auth/logout', { TODO
  //   method: 'POST'
  // })) as unknown as AuthSession

  await clearUserSession(event)

  return {
    status: 200
  }
})
