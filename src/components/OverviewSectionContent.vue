<template>
  <div class="content">
    <h6 class="_secondaryTitle">Talk with ac?</h6>
    <h3 class="_moduleTitle">
      Increase Your Study Productivity
    </h3>
    <div class="_moduleDescription">
      When registering on our portal, you gain access to a multitude of benefits that will help you choose the right direction.
    </div>
<!--    <div class="features">-->
<!--      <UOverviewItem v-for="item in items" :text="item.text"/>-->
<!--    </div>-->
  </div>
</template>

<script setup lang="ts">
import UOverviewItem from '@/ui/UOverviewItem.vue'
import { ref } from 'vue'

const items = ref([
  {
    text: 'Grade Analysis'
  },
  {
    text: 'Analytics Compilation'
  },
  {
    text: 'Unique Approach to Each Individual'
  },
  {
    text: 'Quality Calculations in Direction'
  },
  {
    text: 'Ease of Understanding the Material'
  },
  {
    text: 'Master Everything You Need'
  }
]);
</script>

<style scoped lang="scss">
.content {
  width: 100%;
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
