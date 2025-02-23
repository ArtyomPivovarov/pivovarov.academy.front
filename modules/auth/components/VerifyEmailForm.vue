<script setup lang="ts">
import zod from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const props = defineProps<{
  email: string
}>()

const emit = defineEmits<{
  success: []
}>()
const { $auth } = useNuxtApp()

const schema = zod.object({
  code: zod.string().length(6, 'Длина кода должна быть 6 символов'),
})
type Schema = zod.output<typeof schema>

const state = reactive({
  code: undefined
})

const timerMaxValue = 120
let timerId = 0
const timerValue = ref(timerMaxValue)

onMounted(() => {
  startTimer()
})

async function handleSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await $auth.verifyEmail(event.data)
    emit('success')
  } catch (error) {
    console.log('Ошибка подтверждения почты', error)
  }
}

async function handleResendCode() {
  if(timerValue.value) return

  await $auth.resendCode({ email: props.email })
  startTimer()
}

function startTimer() {
  timerValue.value = timerMaxValue
  timerId = setInterval(() => {
    if (timerValue.value === 0) {
      clearInterval(timerId)
      return
    }

    timerValue.value = timerValue.value--
  }, 1000) as unknown as number
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="handleSubmit">
    Введите код подтверждения из письма, отправленного на почту:
    <strong>{{ email }}</strong>

    <UFormGroup label="Code" name="code">
      <UInput v-model="state.code" />
    </UFormGroup>

    <div>
      Выслать повторно можно будет через {{ timerValue }}&nbsp;с.
    </div>

    <UButton size="sm" @click="handleResendCode">Отправить код заново</UButton>


    <UButton type="submit">Отправить</UButton>
  </UForm>
</template>