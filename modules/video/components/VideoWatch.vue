<script setup lang="ts">
import VideoPlayer from '~/modules/video/ui/VideoPlayer.vue'
import VideoPlaylist from '~/modules/video/ui/VideoPlaylist.vue'
import { useVideo } from '~/modules/video/model/use-video'
import { ContentAccessState } from '~/modules/content-access/content-access.types'
import AuthForm from '~/modules/auth/components/AuthForm.vue'
import SubscriptionTypeCards from '~/modules/subscription/components/SubscriptionTypeCards.vue'
import { useContentAccessState } from '~/modules/content-access/model/use-content-access-state'
import PlayButton from '~/modules/video/ui/PlayButton.vue'
import VideoPreviewImage from '~/modules/video/ui/VideoPreviewImage.vue'

const props = defineProps<{
  video: {
    id: number
    preview: {
      src: string
      alt: string
    }
  }
  subscriptionLevel?: number
}>()

const clicked = ref(false)
const videoAccessState = useContentAccessState(
  computed(() => props.subscriptionLevel ?? null)
)
</script>

<template>
  <div class="relative flex flex-col items-center justify-center">
    <VideoPreviewImage :src="video.preview.src" :alt="video.preview.alt" class="w-full"/>

    <PlayButton v-if="!clicked" class="absolute size-full" @click="clicked = true" />

    <ClientOnly v-else>
      <template
        v-if="videoAccessState === ContentAccessState.FreeContent || videoAccessState === ContentAccessState.ActiveSubscription">
        <VideoPlayer :video-id="video.id" class="w-full absolute" />
      </template>

      <template v-else>
        <div class="flex flex-col items-center gap-4 py-8 absolute">
          <template v-if="videoAccessState === ContentAccessState.Unauthorized">
            <h2 class="text-2xl mb-4">Для просмотра урока необходимо авторизоваться</h2>

            <AuthForm class="w-96"/>
          </template>

          <template v-else-if="videoAccessState === ContentAccessState.NoSubscription">
            <h2 class="text-2xl mb-8">Для просмотра урока необходимо оформить подписку</h2>

            <SubscriptionTypeCards />
          </template>

          <template v-else-if="videoAccessState === ContentAccessState.InsufficientLevel">
            <h2 class="text-2xl mb-8">Для просмотра этого урока требуется более высокий уровень подписки</h2>

            <SubscriptionTypeCards />
          </template>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
