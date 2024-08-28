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
    <h1 class="text-5xl font-medium text-gray-50 mb-12">
      {{ lesson.title }}
    </h1>

    <VideoWatch v-if="lesson?.video" :src="lesson.video.src" />
  </div>
</template>
