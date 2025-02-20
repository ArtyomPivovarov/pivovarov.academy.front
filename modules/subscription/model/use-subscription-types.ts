import { SubscriptionQuery } from "~/modules/subscription/subscription.query"
import type { SubscriptionPeriod } from '~/modules/subscription/subscription.types'

export const useSubscriptionTypes = (period?: Ref<SubscriptionPeriod>) => {
  const { $subscription } = useNuxtApp()

  return useQuery({
    queryKey: [SubscriptionQuery.Types, period],
    queryFn: () => $subscription.getTypes({ period: period?.value }),
  })
}