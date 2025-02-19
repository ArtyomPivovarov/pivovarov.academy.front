<script setup lang="ts">
import { RouteName } from '~/modules/router/router.consts'
import LearningModulesGrid from '~/modules/learning-modules/components/LearningModulesGrid.vue'
import { useTypeRouteQuery } from '~/modules/learning-modules/model/use-type-route-query'

definePageMeta({
  name: RouteName.Main,
  layout: 'main',
  breadcrumb: {
    icon: 'i-heroicons-home',
    ariaLabel: 'Главная',
    label: 'Главная'
  },
})

const type = useTypeRouteQuery()
</script>

<template>
  <LearningModulesGrid :type="type"/>
</template>
