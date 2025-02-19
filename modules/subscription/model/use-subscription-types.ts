import { SubscriptionQuery } from "~/modules/subscription/subscription.query"

export const useSubscriptionTypes = () => {
  const { $subscription } = useNuxtApp()

  return useQuery({
    queryKey: [SubscriptionQuery.Types],
    queryFn: $subscription.getTypes
  })
}