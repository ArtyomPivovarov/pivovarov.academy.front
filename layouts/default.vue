<script setup lang="ts">
import HeaderSection from '~/modules/header/components/HeaderSection.vue'
</script>

<template>
  <div class="relative pt-24 text-gray-300">
    <HeaderSection />

    <main class="px-8">
      <slot />
    </main>
  </div>
</template>
