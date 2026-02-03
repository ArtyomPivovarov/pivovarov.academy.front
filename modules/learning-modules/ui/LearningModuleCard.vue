<script setup lang="ts">
import {
  type LearningModule,
  LearningModuleLevel
} from '~/modules/learning-modules/learning-modules.types'
import { LM_TECHNOLOGY_PRESET } from '~/modules/learning-modules/learning-modules.consts'
import { RouteName } from '~/modules/router/router.consts'
import TechnologyBadge from '~/modules/learning-modules/ui/TechnologyBadge.vue'
import type { BadgeVariant } from '#ui/types'
import SubscriptionTypeBadge from '~/modules/subscription/ui/SubscriptionTypeBadge.vue'

const props = defineProps<{
  learningModule: LearningModule
}>()

const levelData = computed<{ label: string, variant: BadgeVariant }>(() => {
  switch (props.learningModule.level) {
    case LearningModuleLevel.Trainee:
      return { label: 'Trainee', variant: 'soft' }
    case LearningModuleLevel.Junior:
      return { label: 'Junior', variant: 'outline' }
    case LearningModuleLevel.Middle:
      return { label: 'Middle', variant: 'subtle' }
    case LearningModuleLevel.Senior:
      return { label: 'Senior', variant: 'solid' }
    default:
      return { label: '', variant: 'solid' }
  }
})
</script>

<template>
  <NuxtLink
    :to="{
      name: RouteName.LearningModule,
      params: { moduleId: learningModule.id.toString() }
    }"
    class="flex flex-col rounded-3xl bg-color border-4 border-gray-950 dark:border-white/50 py-4 pb-6 px-5 hover:border-primary/75 hover:dark:border-primary/75 transition-all cursor-pointer hover:scale-105"
  >
    <div class="text-xl font-semibold">
      <div class="float-right ml-2 flex flex-col gap-1 items-end">
        <UBadge
          v-if="learningModule.level"
          :variant="levelData.variant"
          class="capitalize"
        >
          {{ levelData.label }}
        </UBadge>

        <SubscriptionTypeBadge v-if="learningModule.subscriptionType" :subscription-type="learningModule.subscriptionType" />
      </div>


      <h3 class="line-clamp-2 leading-tight whitespace-pre-line">{{ learningModule.title }}</h3>
    </div>

    <div class="mt-auto">
      <UIcon
        :name="
          (learningModule.technologies?.[0] &&
            LM_TECHNOLOGY_PRESET[learningModule.technologies?.[0]].icon) ||
          'i-hugeicons:ai-brain-05'
        "
        class="block w-[40%] h-max aspect-[1] mx-auto my-6"
      />

      <div class="flex flex-wrap gap-1">
        <TechnologyBadge
          v-for="technology in learningModule.technologies"
          :key="technology"
          :technology="technology"
        />
      </div>
    </div>
  </NuxtLink>
</template>
