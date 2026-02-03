<script setup lang="ts">
import VideoPlayer from '~/modules/video/ui/VideoPlayer.vue'
import { ContentAccessState } from '~/modules/content/content-access.types'
import AuthForm from '~/modules/auth/components/AuthForm.vue'
import SubscriptionTypeCards from '~/modules/subscription/components/SubscriptionTypeCards.vue'
import { useContentAccessState } from '~/modules/content/model/use-content-access-state'
import PlayButton from '~/modules/video/ui/PlayButton.vue'
import VideoPreviewImage from '~/modules/video/ui/VideoPreviewImage.vue'
import WarningTitle from '~/modules/content/ui/WarningTitle.vue'

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

const playClicked = ref(false)
const contentAccessState = useContentAccessState(
  computed(() => props.subscriptionLevel ?? null)
)

const contentRef = ref<HTMLElement | null>(null)

function handlePlayClick() {
  playClicked.value = true

  if (contentRef.value) {
    contentRef.value.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<template>
  <div class="relative flex flex-col items-center justify-center">
    <div class="relative flex flex-col items-center justify-center w-full">
      <VideoPreviewImage
        :src="video.preview.src"
        :alt="video.preview.alt"
        class="w-full"
      />

      <PlayButton
        class="absolute size-full"
        @click="handlePlayClick"
      />
    </div>

    <div
      v-if="playClicked"
      ref="contentRef"
      id="lesson-content"
      class="lg-more:absolute lg-more:size-full scroll-mt-[100px] lg-more:flex flex-col items-center justify-center"
    >
      <ClientOnly>
        <template
          v-if="
            contentAccessState === ContentAccessState.FreeContent ||
            contentAccessState === ContentAccessState.ActiveSubscription
          "
        >
          <VideoPlayer
            :video-id="video.id"
            class="w-full absolute"
          />
        </template>

        <template v-else>
          <div class="flex flex-col items-center py-8">
            <template
              v-if="contentAccessState === ContentAccessState.Unauthorized"
            >
              <WarningTitle>
                You need to login to watch this lesson
              </WarningTitle>

              <AuthForm class="w-96" />
            </template>

            <template
              v-else-if="
                contentAccessState === ContentAccessState.NoSubscription
              "
            >
              <WarningTitle>
                You need a subscription to watch this lesson
              </WarningTitle>

              <SubscriptionTypeCards class="w-full" />
            </template>

            <template
              v-else-if="
                contentAccessState === ContentAccessState.InsufficientLevel
              "
            >
              <WarningTitle>
                This lesson requires a higher subscription level
              </WarningTitle>

              <SubscriptionTypeCards class="w-full" />
            </template>
          </div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>
