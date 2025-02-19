<script setup lang="ts">
defineProps<{
  src: string
}>()

const video = ref<HTMLVideoElement | null>(null)
const { playing, } = useMediaControls(video)
</script>

<template>
  <div class="relative" >
    <video
      :src="src"
      ref="video"
      class="aspect-16/9 w-full border-0 rounded-lg backdrop-blur-sm"
      :class="{ 'backdrop-blur-sm': video?.paused }"
      controls
    />

    <Transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
      >
      <div
        v-show="!playing"
        class="absolute inset-0 flex justify-center items-center"
        @click="playing = true">
<!--        <UButton-->
<!--          variant="link"-->
<!--        >-->
<!--          <Icon name="i-heroicons:play-circle-16-solid" class="size-16"></Icon>-->
<!--        </UButton>-->
      </div>
    </Transition>
  </div>
</template>
