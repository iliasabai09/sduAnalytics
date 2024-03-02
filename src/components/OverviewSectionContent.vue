<template>
  <div class="content">
    <h6 class="_secondaryTitle">Why Choose Us?</h6>
    <h3 class="_moduleTitle">
      Safeguard Your Brand with Cyber Security and IT Solutions
    </h3>
    <div class="_moduleDescription">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div class="features">
      <UOverviewItem v-for="item in items" :text="item.text"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import UOverviewItem from '@/ui/UOverviewItem.vue';
import { ref } from 'vue';

const items = ref([
  {
    text: 'Remote IT Assistance'
  },
  {
    text: 'Cloud Services'
  },
  {
    text: 'Managed IT Service '
  },
  {
    text: 'IT Security Services '
  },
  {
    text: 'Practice IT Management'
  },
  {
    text: 'Solving IT Problems'
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
