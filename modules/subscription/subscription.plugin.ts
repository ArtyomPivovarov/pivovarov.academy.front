import type { Subscription } from '~/modules/subscription/subscription.types'
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
          getTypes: async () => $api<SubscriptionType[]>(baseUrl + '/types'),
          buy: async (typeId: number) => $api<Subscription>(baseUrl + '/buy', { method: 'POST', body: { typeId } }),
        },
      }
    }
  }
})
