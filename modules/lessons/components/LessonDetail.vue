<script setup lang="ts">
import VideoWatch from '~/modules/video/components/VideoWatch.vue'
import type { LearningModule } from '~/modules/learning-modules/learning-modules.types'
import type { Lesson } from '~/modules/lessons/lessons.types'

const props = defineProps<{
  learningModule: LearningModule
  lesson: Lesson
}>()


</script>

<template>
  <div v-if="learningModule && lesson">
    <h1 class="text-5xl md:text-2xl font-medium text-gray-50 mb-5 md:mb-3">
      {{ lesson.title }}
    </h1>

    <div class="text-content mb-12 md:mb-7">
      {{ lesson.description }}
    </div>

    <VideoWatch
      v-if="lesson.video"
      :video="{
        id: lesson.video.id,
        preview: {
          src: lesson.video.previewSrc,
          alt: lesson.title
        }
      }"
      :subscription-level="learningModule.subscriptionType?.level"
      class="mb-6 md:mb-4"
    />
  </div>
</template>
