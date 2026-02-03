<script setup lang="ts">
import type { SubscriptionType } from '~/modules/subscription/subscription.types'
import { useActiveSubscription } from '~/modules/subscription/model/use-active-subscription'
import PriceText from '~/modules/price/ui/PriceText.vue'

const props = defineProps<{
  type: SubscriptionType
}>()

const periodText = computed(() => {
  if (props.type.period === 'always') {
    return 'always'
  }

  if (props.type.period === 'month') {
    return 'month'
  }

  if (props.type.period === 'year') {
    return 'year'
  }

  return ''
})

const { data: subscription } = useActiveSubscription()
</script>

<template>
  <div
    class="w-72 shrink-0 sm:w-[94%] flex flex-col rounded-3xl border-4 sm:border-3 py-4 pb-6 px-5"
    :class="{
      'pointer-events-none': type.level <= (subscription?.type.level ?? 0),
      'bg-white/20 border-white/50': type.level === 0,
      'transition-all cursor-pointer': type.level > 0,
      'bg-color  hover:border-primary/75 hover:dark:border-primary/75 scale-110 sm:scale-105 hover:scale-[115%] sm:hover:scale-110 border-white/50':
        type.level === 1,
      'bg-gradient-to-r from-purple-500 to-pink-500 border-none hover:scale-105 text-white':
        type.level === 2
    }"
  >
    <h3 class="mb-2 text-3xl sm:text-xl font-bold text-white">
      {{ type.title }}
    </h3>

    <div class="text-md sm:text-base mb-4">{{ type.description }}</div>

    <div class="mb-8">
      <span class="font-bold text-2xl">
        <PriceText :price="type.price" />
      </span>

      <span class="font-semibold"> / {{ periodText }} </span>
    </div>

    <UButton
      v-if="type.level > (subscription?.type.level ?? 0)"
      :color="type.level === 1 ? 'primary' : 'black'"
      block
      size="lg"
      class="mt-auto"
    >
      Buy
    </UButton>
  </div>
</template>
