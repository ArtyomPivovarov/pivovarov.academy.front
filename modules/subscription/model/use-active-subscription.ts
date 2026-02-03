import { SubscriptionQuery } from '~/modules/subscription/subscription.query'
import { mockActiveSubscription } from '~/utils/mocks'

export function useActiveSubscription() {
  const { loggedIn, user } = useUserSession()
  const { $subscription } = useNuxtApp()
  const { isMockMode } = useMockMode()

  return useQuery({
    queryKey: [SubscriptionQuery.Active, computed(() => user.value?.email)],
    queryFn: () => {
      if (isMockMode.value && loggedIn.value) {
        return Promise.resolve(mockActiveSubscription)
      }
      return loggedIn.value ? $subscription.getActive() : null
    },
  })
}