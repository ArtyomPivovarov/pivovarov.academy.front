<script setup lang="ts">
import { useSubscriptionTypes } from '@/modules/subscription/model/use-subscription-types'
import { SubscriptionQuery } from '~/modules/subscription/subscription.query'
import type { SubscriptionType } from '~/modules/subscription/subscription.types'
import SubscriptionTypeCard from '~/modules/subscription/components/SubscriptionTypeCard.vue'
import SubscriptionPeriodToggle from '~/modules/subscription/ui/SubscriptionPeriodToggle.vue' // Подключаем ваш композабл `use-subscription-types`

const { $subscription } = useNuxtApp()
const period = ref<'month' | 'year'>('year')
const { data: subscriptionTypes, suspense: typesSuspense } = useSubscriptionTypes(period)
const queryClient = useQueryClient()

const freeType: SubscriptionType = {
  id: 0,
  slug: 'free',
  title: 'Бесплатный',
  description: 'Позволяет просматривать видео',
  price: 0,
  period: 'always',
  level: 0,
  createdAt: '1970-01-01T00:00:00.000Z',
  updatedAt: '1970-01-01T00:00:00.000Z'
}

onServerPrefetch(async () => {
  await typesSuspense()
})

async function handleBuySubscription(id: number) {
  try {
    await $subscription.buy(id)
    await queryClient.invalidateQueries({ queryKey: [SubscriptionQuery.Active] })
  } catch (error) {
    // Если произошла ошибка, выводим её в консоль
    console.error(error)
  }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <SubscriptionPeriodToggle v-model="period" class="mb-12"/>

    <div class="flex flex-wrap justify-center sm:flex-col sm:items-center gap-7">
      <SubscriptionTypeCard :type="freeType" @click="handleBuySubscription(freeType.id)" />
      <SubscriptionTypeCard v-for="type in subscriptionTypes" :key="type.id" :type="type" @click="handleBuySubscription(type.id)" />
    </div>
  </div>
</template>