<template>
  <button :class="color" :style="{ width }">{{ title }}</button>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false,
    default: 'primary'
  },
  width: {
    type: String as PropType<'100%' | 'fit-content'>,
    required: false,
    default: 'fit-content'
  }
})
</script>

<style scoped lang="scss">
button {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  border-radius: 8px;
  padding: 0 16px;
  cursor: pointer;
  border: none;
}

button.primary {
  background-color: var(--primary);
}
</style>
