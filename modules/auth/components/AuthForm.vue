<script setup lang="ts">
import zod from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import CredentialsForm from '~/modules/auth/components/CredentialsForm.vue'
import VerifyEmailForm from '~/modules/auth/components/VerifyEmailForm.vue'

const { $auth } = useNuxtApp()

const isRegister = useBooleanQuery('registration')

const schema = zod.object({
  email: zod.string().email('Некорректный email'),
  password: zod.string().min(5, 'Пароль должен быть не менее 5 символов')
})

type Schema = zod.output<typeof schema>

const state = reactive({
  email: '',
  password: ''
})
const verifyEmailState = ref(false)

</script>

<template>
  <CredentialsForm v-if="!verifyEmailState" @registered="verifyEmailState = true" />
  <VerifyEmailForm v-else :email="state.email"/>
</template>
