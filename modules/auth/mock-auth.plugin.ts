import { MOCK_CONFIG } from '~/utils/mocks/config'

export default defineNuxtPlugin({
  name: 'mock-auth',
  dependsOn: ['auth'],
  setup: async () => {
    if (import.meta.server) return
    
    const { isMockMode } = useMockMode()
    
    if (!isMockMode.value || !MOCK_CONFIG.autoLogin) {
      return
    }

    const { session } = useUserSession()
    const mockSession = useMockSession()
    
    session.value = mockSession
    
    if (MOCK_CONFIG.enableLogging) {
      console.log('[Mock Mode] ✅ Logged in as:', mockSession.user.email)
    }
  }
})
