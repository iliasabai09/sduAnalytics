<template>
  <div class="wrapper">
    <div class="_secondaryTitle">About Us</div>
    <h3 class="_moduleTitle">Elevate: Empowering Student Success</h3>
    <p>We are creating a platform designed for students to help them improve their grades and enhance productivity. Our project is developed with the needs of modern students in mind, offering tools for performance analysis and personalized recommendations for enhancing the learning process. We strive to be your reliable partner in achieving academic goals, providing innovative solutions and supporting you on the path to success.</p>
    <div class="indicator-group">
      <UPercentIndicator title="Productivity" percent="90"/>
      <UPercentIndicator title="Concentration" percent="75"/>
      <UPercentIndicator title="Right Approach to Learning" percent="85"/>
    </div>
    <UButton title="Узнать больше"/>
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

p {
  font-size: 16px;
  line-height: 1.8;
  color: #5f5f5f;
}

</style>
