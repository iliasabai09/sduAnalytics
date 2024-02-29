<template>
    <div class="block">
      <h2>{{ number }}</h2>
      <h3>{{ description }}</h3>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    number: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped lang="scss">
  .block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        color: #fff;
        font-size: 45px;
        font-weight: 700;
        margin-bottom: 5px;
        word-spacing: -5px;
    }

    h3 {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
    }
   
  }
  </style>
  