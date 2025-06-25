<script setup lang="ts">
import { Toaster } from 'vue-sonner'
// import 'vue-sonner/style.css'
import ToastBody from './ToastBody.vue'
</script>

<template>
  <Toaster
    :duration="Infinity"
    rich-colors
    close-button
    :component="ToastBody"
    :toast-options="{
      class: 'border border-success-1 rounded-[6px] bg-white',
      classes: {
        title: 'text-solid-gray-900 font-700',
        description: 'text-solid-gray-800 font-400'
      }
    }"
  />
</template>
