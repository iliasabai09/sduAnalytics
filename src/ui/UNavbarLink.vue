<template>
  <a :href="link" :style="{ color: color }">{{ title }}</a>
</template>

<script setup lang="ts">
defineProps({
  link: {
    type: String,
    default: '#',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false
  }
})
</script>

<style scoped>
a {
  font-size: 16px;
  font-weight: bold;
}
</style>
