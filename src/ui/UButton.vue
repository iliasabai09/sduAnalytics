<template>
  <button :class="[color, mobileWidth && 'mobileWidth']" :style="{ width }">{{ title }}</button>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

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
  },
  mobileWidth: {
    type: Boolean,
    required: false,
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
  background-color: #151c53;
}

button.mobileWidth {
  @media (max-width: 768px) {
    width: 100% !important;
  }
}
</style>
