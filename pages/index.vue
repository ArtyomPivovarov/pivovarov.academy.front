<script setup lang="ts">
import { RouteName } from '~/modules/router/router.consts'
import LearningModulesGrid from '~/modules/learning-modules/components/LearningModulesGrid.vue'

definePageMeta({
  name: RouteName.Main,
  layout: 'main',
  breadcrumb: {
    icon: 'i-heroicons-home',
    ariaLabel: 'Главная',
    label: 'Главная'
  },
})
</script>

<template>
  <LearningModulesGrid />
</template>
