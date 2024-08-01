<script setup lang="ts">
import { RouteName } from '~/modules/router/router.consts'
import LearningModulesGrid from '~/modules/learning-modules/components/LearningModulesGrid.vue'

definePageMeta({
  name: RouteName.Intensives
})
</script>

<template>
  <LearningModulesGrid type="intensive" />
</template>
