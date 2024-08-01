<script setup lang="ts">
import { RouteName } from '~/modules/router/router.consts'
import LearningModulesGrid from '~/modules/learning-modules/components/LearningModulesGrid.vue'

definePageMeta({
  name: RouteName.Courses
})
</script>

<template>
  <LearningModulesGrid type="course" />
</template>
