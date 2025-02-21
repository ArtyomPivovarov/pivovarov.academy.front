<script setup lang="ts">
import HeaderSection from '~/modules/header/components/HeaderSection.vue'
</script>

<template>
  <div class="relative pt-24">
    <HeaderSection />

    <main class="p-8 md:p-5">
      <slot />
    </main>
  </div>
</template>
