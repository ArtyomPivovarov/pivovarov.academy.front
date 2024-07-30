<script setup lang="ts">
const { data } = useLearningModules()
</script>

<template>
  <UCarousel v-slot="{ item }" :items="data">
    <UCard>
      <template #header> item.title </template>

      {{ item.description }}

      <template #footer>
        <UButton>View</UButton>
      </template>
    </UCard>
  </UCarousel>
</template>
