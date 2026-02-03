import { SubscriptionQuery } from "~/modules/subscription/subscription.query"
import type { SubscriptionPeriod } from '~/modules/subscription/subscription.types'
import { mockSubscriptionTypes } from '~/utils/mocks'

export const useSubscriptionTypes = (period?: Ref<SubscriptionPeriod>) => {
  const { $subscription } = useNuxtApp()
  const { isMockMode } = useMockMode()

  return useQuery({
    queryKey: [SubscriptionQuery.Types, period],
    queryFn: () => {
      if (isMockMode.value) {
        const filtered = period?.value 
          ? mockSubscriptionTypes.filter(t => t.period === period.value)
          : mockSubscriptionTypes
        return Promise.resolve(filtered)
      }
      return $subscription.getTypes({ period: period?.value })
    },
  })
}