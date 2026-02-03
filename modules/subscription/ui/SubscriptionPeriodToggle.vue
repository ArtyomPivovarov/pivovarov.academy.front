<script setup lang="ts">
import type { SubscriptionPeriod } from '~/modules/subscription/subscription.types'

defineProps<{
  loading: boolean
}>()

const period = defineModel<SubscriptionPeriod>()
const model = computed({
  get: () => period.value === 'year',
  set: (value: boolean) => {
    period.value = value ? 'year' : 'month'
  }
})

function handleClick(ev: MouseEvent) {
  if (ev.defaultPrevented) return
  model.value = !model.value
}
</script>

<template>
  <div class="flex items-center gap-4 cursor-pointer dark:text-zinc-400 dark:hover:text-color transition-colors" @click="handleClick">
    <div>
       Monthly
    </div>

    <UToggle v-model="model" :loading="loading" />

    <div>
      Yearly
    </div>
  </div>
</template>