<script setup lang="ts">
import HeaderSection from '~/modules/header/components/HeaderSection.vue'
</script>

<template>
  <div class="relative pt-20 ">
    <HeaderSection />

    <main class="p-8 md:p-5 max-w-[1280px] mx-auto box-content">
      <slot />
    </main>
  </div>
</template>
