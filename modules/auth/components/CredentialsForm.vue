<script setup lang="ts">
import zod from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const emit = defineEmits<{
  registered: [email: string]
  'logged-in': []
}>()
const { $auth } = useNuxtApp()

const isRegister = useBooleanQuery('registration')
const schema = zod.object({
  email: zod.string().email('Invalid email'),
  password: zod.string().min(5, 'Password must be at least 5 characters')
})
type Schema = zod.output<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined
})
const loading = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    loading.value = true
    if (isRegister.value) {
      await $auth.register(event.data)
      emit('registered', event.data.email)
    } else {
      await $auth.login(event.data)
      emit('logged-in')
    }
  } catch (error) {
    console.log('Error:', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4 bg-color"
    @submit="onSubmit"
  >
    Registration: <UToggle v-model="isRegister" />

    <UFormGroup
      label="Email"
      name="email"
    >
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup
      label="Password"
      name="password"
    >
      <UInput
        v-model="state.password"
        type="password"
      />
    </UFormGroup>

    <UButton
      type="submit"
      :loading="loading"
      >Submit</UButton
    >
  </UForm>
</template>
