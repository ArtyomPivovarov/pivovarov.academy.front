<script setup lang="ts">
import { useLearningModule } from '~/modules/learning-modules/model/use-learning-module'
import { RouteName } from '~/modules/router/router.consts'
import TechnologyBadge from '~/modules/learning-modules/ui/TechnologyBadge.vue'

const props = defineProps<{
  id: number
}>()

const { data: learningModule, suspense } = useLearningModule(toRef(() => props.id))
onServerPrefetch(async () => {
  await suspense()
})
</script>

<template>
  <div v-if="learningModule">
    <h1 class="text-5xl md:text-2xl font-medium text-gray-50 mb-12 md:mb-6">
      {{ learningModule.title }}

      <div class="inline-flex flex-wrap gap-1 align-middle">
        <TechnologyBadge
          v-for="technology in learningModule.technologies"
          :key="technology"
          :technology="technology"
        />
      </div>
    </h1>

    <div class="text-content mb-14 md:mb-8" v-html="learningModule.description" />

    <nav class="flex flex-col gap-3 max-w-2xl text-xl">
      <NuxtLink
        v-for="(lesson, index) in learningModule.lessons"
        :key="lesson.id"
        :to="{
          name: RouteName.Lesson,
          params: { moduleId: learningModule.id, lessonId: lesson.id }
        }"
        class="flex items-center rounded-3xl border-4 border-gray-950 dark:border-white/50 py-4 px-5 hover:border-primary/75 hover:dark:border-primary/75 hover:text-white transition-all cursor-pointer user-select-none md:text-base"
      >
        {{ index + 1 }}. {{ lesson.title }}

        <UIcon name="i-mdi:chevron-right" class="ml-auto size-6" />
      </NuxtLink>
    </nav>
  </div>
</template>
