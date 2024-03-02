<template>
  <div class="wrapper">
    <div class="subtitle">ABOUT OUR COMPANY</div>
    <h3 class="_moduleTitle">Providing Your Business With A Quality IT Service is Our Passion</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua enim ad minim</p>
    <div class="indicator-group">
      <UPercentIndicator title="IT Consulting" percent="90"/>
      <UPercentIndicator title="Cloud Solutions" percent="75"/>
      <UPercentIndicator title="Managed IT Service" percent="85"/>
    </div>
    <UButton title="Learn More"/>
  </div>
</template>

<script setup lang="ts">
import UPercentIndicator from '@/ui/UPercentIndicator.vue'
import UButton from '@/ui/UButton.vue'</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.indicator-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.subtitle {
  color: var(--secondary);
  font-size: 16px;
  font-weight: 700;
}

p {
  font-size: 16px;
  line-height: 1.8;
  color: #5f5f5f;
}

</style>
