<script setup lang="ts">
import HeaderSection from '~/modules/header/components/HeaderSection.vue'
</script>

<template>
  <div class="relative pt-24">
    <HeaderSection />

    <slot />
  </div>
</template>
