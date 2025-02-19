<script setup lang="ts">
import type { SubscriptionType } from '~/modules/subscription/subscription.types'
import { useActiveSubscription } from '~/modules/subscription/model/use-active-subscription'

defineProps<{
  type: SubscriptionType
}>()

const { data: subscription } = useActiveSubscription()
</script>

<template>
  <div
    class="w-72 sm:w-full flex flex-col rounded-3xl border-4 sm:border-3 py-4 pb-6 px-5"
    :class="{
    'pointer-events-none': type.level <= (subscription?.type.level ?? 0),
    'bg-white/20 border-white/50': type.level === 0,
    'transition-all cursor-pointer': type.level > 0,
    'hover:border-primary/75 hover:dark:border-primary/75 scale-110 sm:scale-105 hover:scale-[115%] sm:hover:scale-110 border-white/50': type.level === 1,
    'bg-gradient-to-r from-purple-500 to-pink-500 border-none hover:scale-105 text-white': type.level === 2,
  }"
  >
    <h3 class="mb-2 text-3xl sm:text-xl font-bold text-white">{{ type.title }}</h3>

    <div class="text-md sm:text-base mb-4">{{ type.description }}</div>

    <div class="mb-8">
        <span class="font-bold text-2xl">
          {{ type.price }}&nbsp;₽
        </span>

      <span class="font-semibold">
        / {{ type.period }}
        </span>
    </div>

    <UButton
      v-if="type.level > (subscription?.type.level ?? 0)"
      :color="type.level === 1 ? 'primary' : 'black'"
      block
      size="lg"
      class="mt-auto"
    >
      Купить
    </UButton>
  </div>
</template>