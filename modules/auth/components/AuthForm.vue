<script setup lang="ts">
import zod from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import CredentialsForm from '~/modules/auth/components/CredentialsForm.vue'
import VerifyEmailForm from '~/modules/auth/components/VerifyEmailForm.vue'

const verifyEmailState = ref(false)
const email = ref('')

function handleRegistered(e: string) {
  email.value = e
  verifyEmailState.value = true
}
</script>

<template>
  <CredentialsForm
    v-if="!verifyEmailState"
    @registered="handleRegistered"
  />
  <VerifyEmailForm
    v-else
    :email="email"
  />
</template>
