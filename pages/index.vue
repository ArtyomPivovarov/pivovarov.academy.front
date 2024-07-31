<script setup lang="ts">
import { RouteName } from '~/modules/router/router.consts'
import { useUsers } from '~/modules/users/model/use-users'

definePageMeta({
  name: RouteName.Main
})

const { data: users } = useUsers()
</script>

<template>
  <div>Users: {{ users }}</div>
</template>
