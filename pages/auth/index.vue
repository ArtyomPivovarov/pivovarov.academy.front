<script setup lang="ts">
import AuthForm from '~/modules/auth/components/AuthForm.vue'
import { RouteName } from '~/modules/router/router.consts'

definePageMeta({
  name: RouteName.Auth
})
</script>

<template>
  <div class="flex items-center justify-center h-svh">
    <AuthForm />
  </div>
</template>
