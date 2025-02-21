<script setup lang="ts">
import type { SubscriptionType } from '~/modules/subscription/subscription.types'

defineProps<{
  subscriptionType: SubscriptionType
}>()
</script>

<template>
  <UBadge
    :label="subscriptionType.title"
    :color="subscriptionType.level > 1 ? 'violet' : 'black'"
    :icon="subscriptionType.level > 1 ? 'i-heroicons-rocket-launch' : ''"
  />
</template>