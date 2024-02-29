<template>
    <section class="_container">
      <UOverviewSectionImg/>
      <OverviewSectionContent/>
    </section>
</template>
  
<script setup lang="ts">
  import UOverviewSectionImg from '@/ui/UOverviewSectionImg.vue';
  import OverviewSectionContent from '@/components/OverviewSectionContent.vue'
</script>
  
<style scoped>
  section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #fff;
  }
</style>
  