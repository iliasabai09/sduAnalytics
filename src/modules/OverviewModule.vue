<template>
  <section class="_container">
    <UOverviewSectionImg/>
    <OverviewSectionContent/>
  </section>
</template>

<script setup lang="ts">
import UOverviewSectionImg from '@/ui/UOverviewSectionImg.vue';
import OverviewSectionContent from '@/components/OverviewSectionContent.vue';
</script>

<style scoped lang="scss">
section {
  display: flex;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #fff;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 992px) {
    flex-direction: column;
  }

  img {
    width: 50%;
    @media (max-width: 992px) {
      width: 100%;
    }
  }
}
</style>
