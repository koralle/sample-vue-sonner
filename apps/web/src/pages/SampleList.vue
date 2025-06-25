<script setup lang="ts">
import { successToast, Toast } from '@sample-vue-sonner/shared-ui/toast';
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = async () => {
  await router.push('/sample/1')
  successToast('ご飯できたよ', '今日のご飯メニューはカレーだよ')
}
const handleClick2 = () => {
  successToast('ご飯できたよ', '今日のご飯メニューはカレーだよ')
}
</script>

<template>
  <button @click="handleClick">
    起こす
  </button>
  <button @click="handleClick2">
    起こす
  </button>
</template>
