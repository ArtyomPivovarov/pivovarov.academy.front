<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <iframe
    :src="src"
    loading="lazy"
    style="border: 0; width: 800px; height: 450px"
    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
    allowfullscreen="true"
  />
</template>
