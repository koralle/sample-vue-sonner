<script lang="ts">
export interface Props {
  title?: string
  description?: string
}
</script>
<script setup lang="ts">
const { title, description } = defineProps<Props>()
</script>

<template>
  <section :class="['flex flex-col gap-[1em]', 'p-4']">
    <div class="flex gap-[0.5em]">
    <h1 class="text-solid-gray-900 font-700">
      {{ title }}
    </h1>
    <button @click="$emit('closeToast')">
      閉じる
    </button>
    </div>
    <p class="text-blue-900 font-400">
      {{ description }}
    </p>
  </section>
</template>
