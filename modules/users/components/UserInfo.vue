<template>
  <AuthState v-slot="{ loggedIn, user }">
    <div v-if="loggedIn && user">
      {{ user.email }}
    </div>
  </AuthState>
</template>
