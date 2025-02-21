<script setup lang="ts">
const props = defineProps<{
  price: number
}>()

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(props.price)
})
</script>

<template>
  {{ formattedPrice }}
</template>