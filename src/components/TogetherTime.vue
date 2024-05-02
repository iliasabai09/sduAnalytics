<template>
  <div class="time boxShadow">
    <div class="time-title titleLarge secondaryText">{{ 'With Us' }}</div>
    <div class="titleLarge time-value">{{ withTime }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { formatTimeElapsed } from '@/utils/functions/formatTimeElapsed'
import { UserService } from '@/shared/services/user.service'

const withTime: any = ref('')
const timer: any = ref(null)

const props: any = defineProps({
  startedTime: {
    type: Number,
    default: Date.now()
  }
})
const time = UserService.getUser().createdAt;

onMounted(() => {
  timer.value = setInterval(() => {
    withTime.value = formatTimeElapsed(time)
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
