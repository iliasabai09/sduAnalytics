<template>
  <div class="content">
    <div class="_secondaryTitle">How it works?</div>
    <h3 class="_moduleTitle">Your reliable assistant in the world of study and grades.</h3>
    <p class="_moduleDescription">Academic Compass provides users with tools to
      analyze and predict their learning outcomes. Users
      can upload their grades, view their progress
      statistics, and receive recommendations to improve
      their academic performance.</p>
    <div class="features">
      <UOverviewItem :text="'Grade Analysis'"/>
      <UOverviewItem :text="'Analytics Compilation'"/>
      <UOverviewItem :text="'Unique Approach to Each Individual'"/>
      <UOverviewItem :text="'Quality Calculations in Direction'"/>
      <UOverviewItem :text="'Ease of Understanding the Material'"/>
      <UOverviewItem :text="'Master Everything You Need'"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import UOverviewItem from '@/ui/UOverviewItem.vue'</script>

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
