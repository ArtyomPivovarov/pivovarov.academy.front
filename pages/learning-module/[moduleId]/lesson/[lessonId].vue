<script setup lang="ts">
import { RouteName } from '~/modules/router/router.consts'
import LessonDetail from '~/modules/lessons/components/LessonDetail.vue'

definePageMeta({
  name: RouteName.Lesson
})

const {
  params: { moduleId, lessonId }
} = useRoute()
</script>

<template>
  <LessonDetail :module-id="Number(moduleId)" :id="Number(lessonId)" />
</template>
