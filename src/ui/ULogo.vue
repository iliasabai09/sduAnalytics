<template>
<!--  <img src="../assets/newLogo.png" alt="logo" :height="height">-->
  <h1 style="color: #fff">AC</h1>
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
