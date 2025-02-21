<script setup lang="ts">
import { useVideo } from '~/modules/video/model/use-video'

const props = defineProps<{
  videoId: number
}>()

const { data: video, suspense } = useVideo(toRef(() => props.videoId))
await suspense()

const videoRef = ref<HTMLVideoElement | null>(null)
const { playing, } = useMediaControls(videoRef)
</script>

<template>
  <video
    v-if="video"
    :src="video.src"
    ref="video"
    class="aspect-16/9 w-full backdrop-blur-sm border-4 border-primary/50 rounded-2xl"
    :class="{ 'backdrop-blur-sm': videoRef?.paused }"
    controls
  />
</template>
