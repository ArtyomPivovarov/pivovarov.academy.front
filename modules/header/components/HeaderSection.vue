<script setup lang="ts">
import { RouteName } from '~/modules/router/router.consts.js'
import UserInfo from '~/modules/users/components/UserInfo.vue'

const links = [
  {
    to: { name: RouteName.Main },
    text: 'Главная'
  },
  {
    to: { name: RouteName.Courses },
    text: 'Курсы'
  },
  {
    to: { name: RouteName.Intensives },
    text: 'Интенсивы'
  }
]
const { $auth } = useNuxtApp()
</script>

<template>
  <header
    class="z-50 fixed top-0 flex w-full items-center justify-between py-4 px-8 backdrop-blur-sm leading-none"
  >
    <NuxtLink
      :to="{ name: RouteName.Main }"
      class="flex items-center text-gray-800 dark:text-gray-50"
    >
      <div class="text-2xl font-bold leading-none">pivovarov.academy</div>
    </NuxtLink>

    <nav
      class="absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center gap-8"
    >
      <ULink
        v-for="link in links"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        :to="link.to"
      >
        {{ link.text }}
      </ULink>
    </nav>

    <AuthState v-slot="{ loggedIn }">
      <nav class="flex items-center gap-4">
        <template v-if="loggedIn">
          <UserInfo />

          <UButton
            :padded="false"
            color="gray"
            variant="link"
            icon="i-mdi:logout"
            @click="$auth.logOut()"
          />
        </template>

        <template v-else>
          <ULink
            v-if="!loggedIn"
            :to="{ query: { auth: 'true' } }"
            class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            Войти
          </ULink>

          <ULink
            v-if="!loggedIn"
            :to="{ query: { auth: 'true', registration: 'true' } }"
            class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            Регистрация
          </ULink>
        </template>
      </nav>
    </AuthState>
  </header>
</template>
