<script setup lang="ts">
import zod from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const { $auth } = useNuxtApp()

const isRegister = useBooleanQuery('registration')

const schema = zod.object({
  email: zod.string().email('Некорректный email'),
  password: zod.string().min(5, 'Пароль должен быть не менее 5 символов')
})

type Schema = zod.output<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (isRegister.value) {
    try {
      const response = await $auth.register(event.data)
      console.log('Пользователь успешно зарегистрирован', response)
    } catch (error) {
      console.log('Ошибка регистрации', error)
    }
  } else {
    try {
      const response = await $auth.login(event.data)
      console.log('Пользователь успешно авторизован', response)
    } catch (error) {
      console.log('Ошибка авторизации', error)
    }
  }
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    Регистрация: <UToggle v-model="isRegister" />

    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Пароль" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit">Отправить</UButton>
  </UForm>
</template>
