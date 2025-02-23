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
  <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=18I5C4S84CL.250221&" width="330" height="50" frameborder="0" allowtransparency="true" scrolling="no"></iframe>

  <LearningModulesGrid :type="type"/>
</template> 
