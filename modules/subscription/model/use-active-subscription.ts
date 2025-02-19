import { SubscriptionQuery } from '~/modules/subscription/subscription.query'

export function useActiveSubscription() {
  const { loggedIn, user } = useUserSession()
  const { $subscription } = useNuxtApp()

  return useQuery({
    queryKey: [SubscriptionQuery.Active, computed(() => user.value?.email)],
    queryFn: () => loggedIn.value ? $subscription.getActive() : null,
  })
}