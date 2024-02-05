<template>
  <button :style="{ width }">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: 'fit-content',
    required: false
  }
})
</script>

<style scoped lang="scss">
button {
  height: 32px;
  border-radius: 8px;
  background-color: var(--primary);
  padding: 0 12px;
  cursor: pointer;
  color: #fff;
  transition: .3s ease;

  &:hover {
    transition: .3s ease;
    opacity: .9;
  }
}
</style>
