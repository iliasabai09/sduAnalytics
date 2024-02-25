<template>
  <a :href="link">{{ title }}</a>
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
  }
})
</script>

<style scoped>
a {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}
</style>
