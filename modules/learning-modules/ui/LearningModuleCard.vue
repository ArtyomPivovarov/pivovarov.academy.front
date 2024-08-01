<script setup lang="ts">
import type { LearningModule } from '~/modules/learning-modules/learning-modules.types'

defineProps<{
  module: LearningModule
}>()
</script>

<template>
  <div
    class="rounded-3xl border-2 border-gray-950 dark:border-white/50 py-4 px-5"
  >
    <div class="mb-2 text-xl font-semibold">
      {{ module.title }}
    </div>

    <UIcon
      name="i-hugeicons:ai-brain-05"
      class="block w-1/2 h-max aspect-[1] mx-auto"
    />

    <div class="text-sm">
      {{ module.description }}
    </div>
  </div>
</template>
