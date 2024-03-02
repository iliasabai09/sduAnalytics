<template>
  <div class="content">
    <div class="_secondaryTitle">WHY TRUST US?</div>
    <h3 class="_moduleTitle">Achieve Digital Transformation For Your Retail Business Services</h3>
    <p class="_moduleDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div class="features">
      <UOverviewItem :text="'Protect your Business'"/>
      <UOverviewItem :text="'Data Security'"/>
      <UOverviewItem :text="'Running your Business'"/>
      <UOverviewItem :text="'Network Security'"/>
      <UOverviewItem :text="'Small Business Owners'"/>
      <UOverviewItem :text="'Network Monitoring'"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import UOverviewItem from '@/ui/UOverviewItem.vue';

</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.features {
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 16px;
  gap: 16px;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
}
</style>
