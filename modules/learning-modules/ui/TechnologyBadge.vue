<script setup lang="ts">
import { LM_TECHNOLOGY_PRESET } from '~/modules/learning-modules/learning-modules.consts'
import type { LearningModuleTechnology } from '~/modules/learning-modules/learning-modules.types'

defineProps<{
  technology: LearningModuleTechnology
}>()
</script>

<template>
  <UBadge
    :style="{
      boxShadow: 'none',
      border: `2px solid ${LM_TECHNOLOGY_PRESET[technology]?.color || 'white'}`
    }"
    :ui="{
      rounded: 'rounded-full'
    }"
    color="white"
    variant="outline"
    class="inline-block ml-1"
  >
    {{ technology }}
  </UBadge>
</template>
