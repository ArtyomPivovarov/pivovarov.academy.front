<script setup lang="ts">
import { useLesson } from '~/modules/lessons/model/use-lesson'
import { useLearningModule } from '~/modules/learning-modules/model/use-learning-module'
import VideoWatch from '~/modules/video/components/VideoWatch.vue'
import AuthForm from '~/modules/auth/components/AuthForm.vue'
import { useContentAccessState } from '~/modules/content-access/model/use-content-access-state'
import { ContentAccessState } from '~/modules/content-access/content-access.types'
import SubscriptionTypeCards from '~/modules/subscription/components/SubscriptionTypeCards.vue'
import type { LearningModule } from '~/modules/learning-modules/learning-modules.types'
import type { Lesson } from '~/modules/lessons/lessons.types'

const props = defineProps<{
  learningModule: LearningModule
  lesson: Lesson
}>()

const videoAccessState = useContentAccessState(
  computed(() => props.learningModule?.subscriptionLevel ?? null)
)
</script>

<template>
  <div v-if="learningModule && lesson">
    <h1 class="text-5xl md:text-2xl font-medium text-gray-50 mb-5 md:mb-3">
      {{ lesson.title }}
    </h1>

    <div class="text-content mb-12 md:mb-7">
      {{ lesson.description }}
    </div>

    <ClientOnly
      v-if="videoAccessState === ContentAccessState.FreeContent || videoAccessState === ContentAccessState.ActiveSubscription">
      <VideoWatch v-if="lesson.video" :id="lesson.video.id" class="mb-6 md:mb-4" />
    </ClientOnly>

    <template v-else>
      <div class="flex flex-col items-center gap-4 py-8">
        <template v-if="videoAccessState === ContentAccessState.Unauthorized">
          <h2 class="text-2xl mb-4">Для просмотра урока необходимо авторизоваться</h2>

          <AuthForm class="w-96"/>
        </template>

        <template v-else-if="videoAccessState === ContentAccessState.NoSubscription">
          <h2 class="text-2xl mb-4">Для просмотра урока необходимо оформить подписку</h2>

          <SubscriptionTypeCards />
        </template>

        <template v-else-if="videoAccessState === ContentAccessState.InsufficientLevel">
          <h2 class="text-2xl mb-4">Для просмотра этого урока требуется более высокий уровень подписки</h2>

          <SubscriptionTypeCards />
        </template>
      </div>
    </template>
  </div>
</template>
