<script setup lang="ts">
import { useLesson } from '~/modules/lessons/model/use-lesson'
import { useLearningModule } from '~/modules/learning-modules/model/use-learning-module'
import VideoWatch from '~/modules/video/components/VideoWatch.vue'

const props = defineProps<{
  moduleId: number
  id: number
}>()

const { data: learningModule } = useLearningModule(toRef(() => props.moduleId))
const { data: lesson } = useLesson(toRef(() => props.id))
</script>

<template>
  <div v-if="learningModule && lesson">
    <VideoWatch v-if="lesson?.video" :src="lesson.video.src" class="mb-6 md:mb-4" />

    <h1 class="text-3xl md:text-xl font-medium text-gray-50 mb-5 md:mb-3">
      {{ lesson.title }}
    </h1>

    <div class="mb-13 md:mb-7">
      {{ lesson.description }}
    </div>
  </div>
</template>
