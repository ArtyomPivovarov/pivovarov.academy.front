<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import VideoMiniature from '~/modules/video/ui/VideoMiniature.vue'

defineProps<{
  items: {
    title: string
    previewSrc: string
    to: RouteLocationRaw
  }[]
}>()
</script>

<template>
  <div
    class="max-w-md flex flex-col gap-4 rounded-3xl border-4 border-gray-950 dark:border-white/50"
  >
    <VideoMiniature
      v-for="item in items"
      :key="item.title"
      :title="item.title"
      :previewSrc="item.previewSrc"
      :to="item.to"
    />
  </div>
</template>
