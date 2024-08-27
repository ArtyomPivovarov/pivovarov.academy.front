<script setup lang="ts">
import { useLesson } from '~/modules/lessons/model/use-lesson'
import { useLearningModule } from '~/modules/learning-modules/model/use-learning-module'

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

    <iframe
      width="860"
      height="484"
      src="https://www.youtube.com/embed/ZQaBcNI_AoM?si=I5owfw0SCiMXISkB"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      class="mx-auto aspect-video"
    ></iframe>
  </div>
</template>
