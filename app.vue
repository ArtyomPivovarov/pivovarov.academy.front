<script setup lang="ts">
import '~/assets/css/global.css'
import AuthModal from '~/modules/auth/components/AuthModal.vue'
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <ClientOnly>
    <AuthModal />
  </ClientOnly>
</template>
