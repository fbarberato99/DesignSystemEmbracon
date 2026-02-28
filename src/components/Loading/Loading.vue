<script setup lang="ts">
import type { LoadingProps } from './Loading.types'

withDefaults(defineProps<LoadingProps>(), {
  size: 48
})
</script>

<template>
  <div class="loading" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="url(#gradient)"
        stroke-width="4"
        stroke-linecap="round"
        fill="none"
        class="loading-circle"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #CE181E; stop-opacity: 1" />
          <stop offset="50%" style="stop-color: #DA3B41; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #CE181E; stop-opacity: 0.3" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.loading {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.loading-circle {
  animation: rotate 1s linear infinite;
  transform-origin: center;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
