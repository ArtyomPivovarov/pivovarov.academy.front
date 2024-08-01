<script setup lang="ts">
import {
  type LearningModule,
  LearningModuleLevel
} from '~/modules/learning-modules/learning-modules.types'

defineProps<{
  module: LearningModule
}>()
</script>

<template>
  <div
    class="rounded-3xl border-2 border-gray-950 dark:border-white/50 py-4 px-5"
  >
    <div class="mb-6 text-xl font-semibold">
      <UBadge
        v-if="module.level"
        :variant="
          module.level === LearningModuleLevel.Trainee
            ? 'soft'
            : module.level === LearningModuleLevel.Junior
              ? 'outline'
              : module.level === LearningModuleLevel.Middle
                ? 'subtle'
                : 'solid'
        "
        class="capitalize float-right inline-block ml-1"
      >
        {{ module.level }}
      </UBadge>

      <span>{{ module.title }}</span>
    </div>

    <UIcon
      name="i-hugeicons:ai-brain-05"
      class="block w-[40%] h-max aspect-[1] mx-auto"
    />

    <div class="text-sm">
      {{ module.description }}
    </div>
  </div>
</template>
