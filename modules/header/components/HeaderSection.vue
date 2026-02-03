<script setup lang="ts">
import { RouteName } from '~/modules/router/router.consts.js'
import UserInfo from '~/modules/users/components/UserInfo.vue'
import { useActiveSubscription } from '~/modules/subscription/model/use-active-subscription'
import { useUserSession } from '#imports'

const links = [
  {
    to: { name: RouteName.LearningModules, query: { type: 'course' } },
    text: 'Courses'
  },
  {
    to: {  name: RouteName.LearningModules, query: { type: 'intensive' } },
    text: 'Intensives'
  }
]

const type = useRouteQuery('type')
const { $auth } = useNuxtApp()
const { progress } = useLoadingIndicator()

</script>

<template>
  <header
    class="z-50 fixed top-0 w-full flex flex-col gap-3 py-4 md:py-4 px-8 md:px-5 backdrop-blur-sm leading-none"
  >
    <div class="flex w-full items-center justify-between">
      <NuxtLink
        :to="{ name: RouteName.Main }"
        class="flex items-center"
      >
        <div class="text-2xl md:text-base font-bold leading-none">pivovarov.academy</div>
      </NuxtLink>

      <AuthState v-slot="{ loggedIn }">
        <nav class="flex items-center gap-4 md:gap-3">
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
              :to="{ query: { auth: 'true', registration: 'true' } }"
              class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 md:text-sm p-1"
            >
              Sign Up
            </ULink>

            <ULink
              v-if="!loggedIn"
              :to="{ query: { auth: 'true' } }"
              class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-1"
            >
              <span class="md:hidden">
                Login
              </span>

              <UIcon name="i-iconamoon:enter" class="md-more:hidden" size="20"/>
            </ULink>
          </template>
        </nav>
      </AuthState>
    </div>

    <nav
      class="md-more:absolute left-1/2 top-1/2 md-more:-translate-x-2/4 md-more:-translate-y-2/4 flex justify-center items-center gap-8"
    >
      <ULink
        v-for="link in links"
        :active="type === link.to.query.type"
        active-class="text-primary"
        inactive-class="hover:text-gray-700 dark:hover:text-gray-200 md:text-base"
        :to="link.to"
      >
        {{ link.text }}
      </ULink>
    </nav>
  </header>
</template>
