<script setup lang="ts">
import LearningModuleDetail from '~/modules/learning-modules/components/LearningModuleDetail.vue'
import { RouteName } from '~/modules/router/router.consts'

definePageMeta({
  name: RouteName.Lesson
})

const {
  params: { id }
} = useRoute()
</script>

<template>Lesson: {{ id }}</template>
