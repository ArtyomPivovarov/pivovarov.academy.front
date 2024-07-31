export default defineEventHandler(event => {
  const session = $fetch(process.env.API_URL + 'auth/me')

  return {
    status: 200,
    body: ''
  }
})
