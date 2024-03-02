<template>
  <a href="#">
    <IconArrowForward/>
    <div>Read More</div>
  </a>
</template>

<script setup lang="ts">
import IconArrowForward from '@/components/icons/IconArrowForward.vue';

</script>

<style scoped lang="scss">
a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--primary);
  font-size: 16px;
  font-weight: bold;
}
</style>
