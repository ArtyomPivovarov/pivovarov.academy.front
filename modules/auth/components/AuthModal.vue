<script setup lang="ts">
import AuthForm from '~/modules/auth/components/AuthForm.vue'

const isOpen = useBooleanQuery('auth')

const { loggedIn, ready } = useUserSession()
watch(
  [ready, loggedIn],
  () => ready.value && loggedIn.value && (isOpen.value = false),
  {
    immediate: true
  }
)
</script>

<template>
  <AuthState v-slot="{ loggedIn }">
    <UModal v-if="!loggedIn" v-model="isOpen">
      <AuthForm v-if="!loggedIn" class="p-3" />
    </UModal>
  </AuthState>
</template>
