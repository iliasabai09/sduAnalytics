<template>
  <img src="https://cutesolution.com/html/techvio/assets/img/logo.png" alt="logo" :height="height">
</template>

<script setup lang="ts">
defineProps({
  height: {
    type: Number,
    required: false,
    default: 45
  }
})
</script>
