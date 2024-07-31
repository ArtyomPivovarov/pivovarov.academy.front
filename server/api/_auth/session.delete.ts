export default defineEventHandler(event => {
  console.log('session delete', event)
  return {
    status: 200,
    body: {
      message: 'session delete',
      event: event
    }
  }
})
