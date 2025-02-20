import type { Subscription, SubscriptionPeriod } from '~/modules/subscription/subscription.types'
import type { SubscriptionType } from '~/modules/subscription/subscription.types'

export default defineNuxtPlugin({
  name: 'subscription',
  setup: () => {
    const baseUrl = '/subscription'
    const { $api } = useNuxtApp()

    return {
      provide: {
        subscription: {
          getActive: async () => $api<{ subscription: Subscription }>(baseUrl + '/active').then(res => res.subscription),
          getTypes: async ({ period }: { period?: SubscriptionPeriod }) => $api<SubscriptionType[]>(baseUrl + '/types', {
            query: { period }
          }),
          buy: async (typeId: number) => $api<Subscription>(baseUrl + '/buy', { method: 'POST', body: { typeId } }),
        },
      }
    }
  }
})
