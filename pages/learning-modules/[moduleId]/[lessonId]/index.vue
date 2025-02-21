<script setup lang="ts">
import { RouteName } from '~/modules/router/router.consts'
import LessonDetail from '~/modules/lessons/components/LessonDetail.vue'
import { useLesson } from '~/modules/lessons/model/use-lesson'
import { useLearningModule } from '~/modules/learning-modules/model/use-learning-module'

definePageMeta({
  name: RouteName.Lesson
})

const runtimeConfig = useRuntimeConfig()
const {
  params: { moduleId, lessonId }
} = useRoute()

const { data: learningModule, suspense: learningModuleSuspense } =
  useLearningModule(toRef(() => Number(moduleId)))
const { data: lesson, suspense: lessonSuspense } = useLesson(
  toRef(() => Number(lessonId))
)

onServerPrefetch(async () => {
  await Promise.all([learningModuleSuspense(), lessonSuspense()])
})

useHead({
  title: computed(
    () =>
      `${lesson.value?.title || ''} | ${learningModule.value?.title || ''} | ${runtimeConfig.public.domain}`
  ),
  meta: [
    {
      name: 'description',
      content: lesson.value?.description || ''
    }
  ]
})

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
  <UBreadcrumb
    :links="links"
    class="mb-4"
  />

  <LessonDetail
    v-if="learningModule && lesson"
    :learning-module="learningModule"
    :lesson="lesson"
  />
</template>
