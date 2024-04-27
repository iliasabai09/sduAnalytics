<template>
  <div class="time boxShadow">
    <div class="time-title titleLarge">{{ 'With Us' }}</div>
    <div class="titleLarge time-value">{{ withTime }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { formatTimeElapsed } from '@/utils/functions/formatTimeElapsed'

const withTime = ref('')
const timer = ref(null)

const props: any = defineProps({
  startedTime: {
    type: Number,
    default: Date.now()
  }
})

onMounted(() => {
  timer.value = setInterval(() => {
    withTime.value = formatTimeElapsed(props.startedTime)
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer.value)
})
</script>

<style scoped lang="scss">
.time {
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  flex: 1;
  text-align: center;

  &-title {
    margin-bottom: 12px;
  }

  &-value {
    color: #00b223;
  }
}
</style>
