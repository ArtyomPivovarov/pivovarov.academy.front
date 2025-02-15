<script setup lang="ts">
import { useLesson } from '~/modules/lessons/model/use-lesson'
import { useLearningModule } from '~/modules/learning-modules/model/use-learning-module'
import VideoWatch from '~/modules/video/components/VideoWatch.vue'

const props = defineProps<{
  moduleId: number
  id: number
}>()

const { data: learningModule, suspense: learningModuleSuspense } = useLearningModule(toRef(() => props.moduleId))
const { data: lesson, suspense: lessonSuspense } = useLesson(toRef(() => props.id))

onServerPrefetch(async () => {
  await Promise.all([learningModuleSuspense(), lessonSuspense()])
})
</script>

<template>
  <div v-if="learningModule && lesson">
    <h1 class="text-5xl md:text-2xl font-medium text-gray-50 mb-5 md:mb-3">
      {{ lesson.title }}
    </h1>

    <VideoWatch v-if="lesson?.video" :src="lesson.video.src" class="mb-6 md:mb-4" />

    <div class="mb-13 md:mb-7">
      {{ lesson.description }}
    </div>
  </div>
</template>
