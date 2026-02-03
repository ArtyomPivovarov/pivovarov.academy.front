<script setup lang="ts">
import { useActiveSubscription } from '~/modules/subscription/model/use-active-subscription.js'
import SubscriptionTypeBadge from '~/modules/subscription/ui/SubscriptionTypeBadge.vue'

const { data: subscription } = useActiveSubscription()
</script>

<template>
  <AuthState v-slot="{ loggedIn, user }">
    <div v-if="loggedIn && user" class="flex items-center gap-1">
      <div class="sm:max-w-20 text-ellipsis overflow-hidden">
        {{ user.email }}
      </div>

      <SubscriptionTypeBadge
        v-if="subscription"
        :subscription-type="subscription.type" />
    </div>
  </AuthState>
</template>
