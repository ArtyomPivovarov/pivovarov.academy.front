<template>
  <div
    class="text-2xl lg:text-xl sm:text-lg flex items-center gap-2 pb-10 xl:pb-8"
  >
    <UIcon
      name="i-heroicons:exclamation-circle"
      :size="32"
      class="text-yellow-500"
    />
    <span><slot /></span>
  </div>
</template>
