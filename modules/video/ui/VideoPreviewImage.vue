<script setup lang="ts">
defineProps<{
  src?: string
  alt: string
}>()
</script>

<template>
  <div class="flex items-center justify-center aspect-16/9 border-4 border-primary/50 rounded-2xl overflow-hidden">
    <img v-if="src" :src="src" :alt="alt" class="size-full object-cover object-top">

    <UIcon name="i-heroicons:photo-solid" class="size-48 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
  </div>
</template>