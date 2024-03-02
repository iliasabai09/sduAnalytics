<template>
  <section class="_container">
    <TrustUsContent/>
    <UTrustUsImg/>
  </section>
</template>

<script setup lang="ts">

import TrustUsContent from '@/components/TrustUsContent.vue';
import UTrustUsImg from '@/ui/UTrustUsImg.vue';
</script>

<style scoped lang="scss">
section {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding-top: 80px;
  padding-bottom: 80px;
  @media (max-width: 992px) {
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  img {
    width: 50%;
    @media (max-width: 992px) {
      width: 100%;
    }
  }
}
</style>
