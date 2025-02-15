<script setup lang="ts">
import { RouteName } from '~/modules/router/router.consts'
import LessonDetail from '~/modules/lessons/components/LessonDetail.vue'
import { useLesson } from '~/modules/lessons/model/use-lesson'
import { useLearningModule } from '~/modules/learning-modules/model/use-learning-module'

definePageMeta({
  name: RouteName.Lesson,
})

const {
  params: { moduleId, lessonId }
} = useRoute()

const { data: learningModule } = useLearningModule(toRef(() => Number(moduleId)))
const { data: lesson } = useLesson(toRef(() => Number(lessonId)))

const links = useBreadcrumbItems({
  overrides: computed(() => [
    undefined,
    undefined,
    {
      label: learningModule.value?.title || '',
      icon: 'i-heroicons:list-bullet'
    },
    {
      label: lesson.value?.title || '',
      icon: 'i-heroicons:play-circle-16-solid'
    }
  ])
})
</script>

<template>
  <UBreadcrumb :links="links" class="mb-4" />

  <LessonDetail :module-id="Number(moduleId)" :id="Number(lessonId)" />
</template>
