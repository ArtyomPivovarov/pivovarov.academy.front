<script setup lang="ts">
const { isLoading, isError, data, error } = useLearningModules()
</script>

<template>
  <div>
    <h1>Learning Modules</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">Error: {{ error }}</div>
    <ul v-else>
      <li v-for="module in data" :key="module.id">
        {{ module.title }}
      </li>
    </ul>
  </div>
</template>
