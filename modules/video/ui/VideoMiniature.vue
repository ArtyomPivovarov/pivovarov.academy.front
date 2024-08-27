<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  title: string
  previewSrc: string
  to: RouteLocationRaw
}>()
</script>

<template>
  <NuxtLink :to="to" class="flex items-start">
    <img
      :src="previewSrc"
      :alt="title"
      class="aspect-video max-w-48 object-cover rounded-md"
    />

    <div class="ml-4">
      <h3 class="text-lg font-semibold">{{ title }}</h3>
    </div>
  </NuxtLink>
</template>
