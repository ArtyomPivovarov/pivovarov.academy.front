<script setup lang="ts">
import type { LearningModule } from '~/modules/learning-modules/learning-modules.types'
import { useLearningModules } from '~/modules/learning-modules/model/use-learning-modules'
import LearningModuleCard from '~/modules/learning-modules/ui/LearningModuleCard.vue'

const props = withDefaults(
  defineProps<{
    type?: LearningModule['type']
  }>(),
  {
    type: undefined
  }
)

const { data, suspense } = useLearningModules(toRef(props, 'type'))
onServerPrefetch(async () => {
  await suspense()
})
</script>

<template>
  <div class="mx-auto flex flex-wrap justify-center gap-4 2xl-more:container">
    <LearningModuleCard v-for="item in data" :key="item.id" :module="item" class="w-[320px] sm:w-full" />
  </div>
</template>
