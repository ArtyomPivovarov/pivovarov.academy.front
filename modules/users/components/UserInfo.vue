<template>
  <AuthState v-slot="{ loggedIn, user }">
    <div v-if="loggedIn && user" class="sm:max-w-20 text-ellipsis overflow-hidden">
      {{ user.email }}
    </div>
  </AuthState>
</template>
