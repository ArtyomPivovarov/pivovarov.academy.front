<script setup lang="ts">
import AuthForm from '~/modules/auth/components/AuthForm.vue'
import { RouteName } from '~/modules/router/router.consts'

definePageMeta({
  name: RouteName.Auth
})

const { $auth } = useNuxtApp()
</script>

<template>
  <div class="flex items-center justify-center h-svh">
    <AuthState v-slot="{ loggedIn, user }">
      <AuthForm v-if="!loggedIn" />

      <div v-else>
        <div>Вы авторизованы</div>
        <div>Пользователь: {{ user?.email }}</div>
        <UButton @click="$auth.logOut()" class="mt-2">Выйти</UButton>
      </div>
    </AuthState>
  </div>
</template>
