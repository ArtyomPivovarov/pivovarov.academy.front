<script setup lang="ts">
import VideoPlayer from '~/modules/video/ui/VideoPlayer.vue'
import VideoPlaylist from '~/modules/video/ui/VideoPlaylist.vue'

defineProps<{
  src: string
  title?: string
  // playlist:
}>()
</script>

<template>
  <div class="flex gap-4">
    <VideoPlayer :src="src" />

    <!--    <VideoPlaylist items=""></VideoPlaylist>-->
  </div>
</template>

<style scoped></style>
