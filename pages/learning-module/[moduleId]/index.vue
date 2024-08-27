<script setup lang="ts">
import LearningModuleDetail from '~/modules/learning-modules/components/LearningModuleDetail.vue'
import { RouteName } from '~/modules/router/router.consts'

definePageMeta({
  name: RouteName.LearningModule
})

const {
  params: { moduleId }
} = useRoute()
</script>

<template>
  <LearningModuleDetail :id="Number(moduleId)" />
</template>
