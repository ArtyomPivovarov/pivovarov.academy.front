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
  code: zod.string()
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
    await $auth.verifyEmail({
      email: props.email,
      code: event.data.code
    })
    emit('success')
  } catch (error) {
    console.log('Ошибка подтверждения почты', error)
  }
}

async function handleResendCode() {
  if (!!timerValue.value) return

  await $auth.resendVerification({ email: props.email })
  startTimer()
}

function startTimer() {
  timerValue.value = timerMaxValue
  timerId = setInterval(() => {
    if (timerValue.value === 0) {
      clearInterval(timerId)
      return
    }

    timerValue.value = timerValue.value - 1
  }, 1000) as unknown as number
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4 bg-color"
    @submit.prevent="handleSubmit"
  >
    Введите код подтверждения из письма, отправленного на почту:
    <strong>{{ email }}</strong>

    <div class="flex gap-1 items-end">
      <UFormGroup
        label="Код"
        name="code"
        class="grow"
      >
        <UInput v-model="state.code" />
      </UFormGroup>

      <UButton
        size="sm"
        :disabled="!!timerValue"
        icon="i-heroicons:arrow-path-16-solid"
        aria-label="Отправить код заново"
        @click="handleResendCode"
      />
    </div>

    <div>Выслать повторно можно будет через {{ timerValue }}&nbsp;с.</div>

    <UButton type="submit">Отправить</UButton>
  </UForm>
</template>
