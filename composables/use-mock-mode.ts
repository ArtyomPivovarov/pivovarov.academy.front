/**
 * Composable for managing mock mode
 * Set NUXT_PUBLIC_MOCK_MODE=true in .env to enable mock data
 */
export function useMockMode() {
  const config = useRuntimeConfig()
  const isMockMode = computed(() => config.public.mockMode === true || config.public.mockMode === 'true')
  
  return {
    isMockMode,
  }
}
