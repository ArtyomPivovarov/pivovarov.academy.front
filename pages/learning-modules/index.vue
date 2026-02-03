<script setup lang="ts">
import LearningModulesGrid from '~/modules/learning-modules/components/LearningModulesGrid.vue'
import { useTypeRouteQuery } from '~/modules/learning-modules/model/use-type-route-query'
import { RouteName } from '~/modules/router/router.consts'

definePageMeta({
  name: RouteName.LearningModules,
  breadcrumb: {
    icon: 'i-heroicons:squares-2x2',
    ariaLabel: 'Learning Modules',
    label: 'Modules'
  },
})

const links = useBreadcrumbItems()
const type = useTypeRouteQuery()
</script>

<template>
  <div>
    <UBreadcrumb :links="links" class="mb-4" />

    <h1 class="text-5xl md:text-2xl font-medium text-gray-50 mb-12 md:mb-6">
      Learning Modules
    </h1>

    <LearningModulesGrid :type="type"/>
</div>
</template>