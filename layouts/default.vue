<script setup lang="ts">
const { session } = useUserSession()
</script>

<template>
  User session: {{ session }}
  <slot />
</template>
