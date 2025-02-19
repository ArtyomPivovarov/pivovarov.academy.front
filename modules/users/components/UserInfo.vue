<script setup lang="ts">
import { useActiveSubscription } from '~/modules/subscription/model/use-active-subscription.js'

const { data: subscription } = useActiveSubscription()
</script>

<template>
  <AuthState v-slot="{ loggedIn, user }">
    <div v-if="loggedIn && user" class="sm:max-w-20 text-ellipsis overflow-hidden">
      {{ user.email }}

      <UBadge
        v-if="subscription"
        :label="subscription.type.title"
        :color="subscription.type.level > 1 ? 'violet' : 'black'"
        class="ml-1"
      />
    </div>
  </AuthState>
</template>
