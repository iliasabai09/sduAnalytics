<template>
    <section class="footer" id="contact">
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
    position: relative;
    z-index: 1;
    background-color: #042c4c;
  }

  section::before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background-image: url(../../public/images/dot-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }


  </style>
