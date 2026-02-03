<script setup lang="ts">
import { useSubscriptionTypes } from '@/modules/subscription/model/use-subscription-types'
import { SubscriptionQuery } from '~/modules/subscription/subscription.query'
import type { SubscriptionType } from '~/modules/subscription/subscription.types'
import SubscriptionTypeCard from '~/modules/subscription/components/SubscriptionTypeCard.vue'
import SubscriptionPeriodToggle from '~/modules/subscription/ui/SubscriptionPeriodToggle.vue'

const { $subscription } = useNuxtApp()
const queryClient = useQueryClient()
const period = ref<'month' | 'year'>('year')

const {
  data: subscriptionTypes,
  suspense: typesSuspense,
  isPending
} = useSubscriptionTypes(period)
await typesSuspense()

const freeType: SubscriptionType = {
  id: 0,
  slug: 'free',
  title: 'Free',
  description: 'Allows watching videos',
  price: 0,
  period: 'always',
  level: 0,
  createdAt: '1970-01-01T00:00:00.000Z',
  updatedAt: '1970-01-01T00:00:00.000Z'
}

async function handleBuySubscription(id: number) {
  try {
    await $subscription.buy(id)
    await queryClient.invalidateQueries({
      queryKey: [SubscriptionQuery.Active]
    })
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <SubscriptionPeriodToggle
      v-model="period"
      :loading="isPending"
      class="mb-8 xl:mb-6"
    />

    <div
      class="flex justify-center lg:flex-wrap gap-7 w-full overflow-auto py-6 snap-x snap-mandatory scrollbar"
    >
      <SubscriptionTypeCard
        :type="freeType"
        @click="handleBuySubscription(freeType.id)"
        class="snap-end"
      />

      <SubscriptionTypeCard
        v-for="type in subscriptionTypes"
        :key="type.id"
        :type="type"
        @click="handleBuySubscription(type.id)"
        class="snap-center"
      />
    </div>
  </div>
</template>
