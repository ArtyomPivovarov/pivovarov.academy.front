<script setup lang="ts">
import VideoPlayer from '~/modules/video/ui/VideoPlayer.vue'
import VideoPlaylist from '~/modules/video/ui/VideoPlaylist.vue'
import { useVideo } from '~/modules/video/model/use-video'

const props = defineProps<{
  id: number
}>()

const { data: video, suspense } = useVideo(toRef(() => props.id))

await suspense()
</script>

<template>
  <div class="flex gap-4">
    <VideoPlayer v-if="video" :src="video.src" class="w-full" />

    <!--    <VideoPlaylist items=""></VideoPlaylist>-->
  </div>
</template>
