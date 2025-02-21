<script setup lang="ts">
import LearningModuleDetail from '~/modules/learning-modules/components/LearningModuleDetail.vue'
import { RouteName } from '~/modules/router/router.consts'
import { useLearningModule } from '~/modules/learning-modules/model/use-learning-module'

definePageMeta({
  name: RouteName.LearningModule,

})

const {
  params: { moduleId }
} = useRoute()

const { data: learningModule } = useLearningModule(toRef(() => Number(moduleId)))

const links = useBreadcrumbItems({
  overrides: computed(() => [
    undefined,
    undefined,
    {
      label: learningModule.value?.title || '',
      icon: 'i-heroicons:list-bullet'
    }
  ])
})

</script>

<template>
  <UBreadcrumb :links="links" class="mb-4" />

  <LearningModuleDetail :id="Number(moduleId)" />
</template>
