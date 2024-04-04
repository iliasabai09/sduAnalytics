<template>
  <img src="../assets/newLogo.png" alt="logo" :height="height">
</template>

<script setup lang="ts">
defineProps({
  height: {
    type: String,
    required: false,
    default: 80
  }
})
</script>
