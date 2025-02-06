<script setup lang="ts">
import {
  type LearningModule,
  LearningModuleLevel
} from '~/modules/learning-modules/learning-modules.types'
import { LM_TECHNOLOGY_PRESET } from '~/modules/learning-modules/learning-modules.consts'
import { RouteName } from '~/modules/router/router.consts'
import TechnologyBadge from '~/modules/learning-modules/ui/TechnologyBadge.vue'
import type { BadgeVariant } from '#ui/types'

const props = defineProps<{
  module: LearningModule
}>()

const levelData = computed<{ label: string, variant: BadgeVariant }>(() => {
  switch (props.module.level) {
    case LearningModuleLevel.Trainee:
      return { label: 'Стажёр', variant: 'soft' }
    case LearningModuleLevel.Junior:
      return { label: 'Джуниор', variant: 'outline' }
    case LearningModuleLevel.Middle:
      return { label: 'Средний', variant: 'subtle' }
    case LearningModuleLevel.Senior:
      return { label: 'Старший', variant: 'solid' }
    default:
      return { label: '', variant: 'solid' }
  }
})
</script>

<template>
  <NuxtLink
    :to="{
      name: RouteName.LearningModule,
      params: { moduleId: module.id.toString() }
    }"
    class="flex flex-col rounded-3xl border-4 border-gray-950 dark:border-white/50 py-4 pb-6 px-5 hover:border-primary/75 hover:dark:border-primary/75 transition-all cursor-pointer hover:scale-105"
  >
    <div class="text-xl font-semibold">
      <UBadge
        v-if="module.level"
        :variant="levelData.variant"
        class="capitalize float-right inline-block ml-2"
      >
        {{ levelData.label }}
      </UBadge>

      <span class="line-clamp-2">{{ module.title }}</span>
    </div>

    <div class="mt-auto">
      <UIcon
        :name="
          (module.technologies?.[0] &&
            LM_TECHNOLOGY_PRESET[module.technologies?.[0]].icon) ||
          'i-hugeicons:ai-brain-05'
        "
        class="block w-[40%] h-max aspect-[1] mx-auto my-6"
      />

      <div class="flex flex-wrap gap-1">
        <TechnologyBadge
          v-for="technology in module.technologies"
          :key="technology"
          :technology="technology"
        />
      </div>
    </div>
  </NuxtLink>
</template>
