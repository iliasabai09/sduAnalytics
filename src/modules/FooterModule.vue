<template>
    <section class="footer">
      <div class="_container">
        <SubscribeArea/>
        <FooterArea/>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import SubscribeArea from '@/components/SubscribeArea.vue';
  import FooterArea from '@/components/FooterArea.vue';
  </script>
  
  <style scoped lang="scss">
  section {
    display: flex;
    justify-content: center;
    gap: 24px;
    z-index: 1;
    background-color: #042c4c;
  }

  
  </style>
  