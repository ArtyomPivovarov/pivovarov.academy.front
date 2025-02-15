<script setup lang="ts">
import LearningModulesGrid from '~/modules/learning-modules/components/LearningModulesGrid.vue'

definePageMeta({
  breadcrumb: {
    icon: 'i-heroicons:squares-2x2',
    ariaLabel: 'Модули обучения',
    label: 'Модули'
  },
})

const links = useBreadcrumbItems()
const type = useRouteQuery('type', undefined, {
  transform: (value) => value ? String(value) : undefined
})
</script>

<template>
  <div>
    <UBreadcrumb :links="links" class="mb-4" />

    <h1 class="text-5xl md:text-2xl font-medium text-gray-50 mb-12 md:mb-6">
      Модули обучения
    </h1>

    <LearningModulesGrid :type="type"/>
</div>
</template>