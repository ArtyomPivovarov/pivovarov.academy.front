<script setup lang="ts">
import HeaderSection from '~/modules/header/components/HeaderSection.vue'
import BackButton from '~/modules/header/components/BackButton.vue'

const route = useRoute()
const router = useRouter()
</script>

<template>
  <div class="relative pt-24 text-gray-300">
    <HeaderSection />

    <main class="p-8 md:p-5">
      <slot />
    </main>
  </div>
</template>
