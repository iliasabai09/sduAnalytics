<template>
  <div class="item">
    <img :src="'/icons/' + social.icon + '.svg'" alt="icon" width="22">
  </div>
</template>

<script setup lang="ts">

defineProps({
  social: {
    type: Object,
    required: true
  }
});
</script>

<style scoped lang="scss">
.item {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid rgb(255, 255, 255, 0.2);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s ease;
  cursor: pointer;

  &:hover {
    transition: .3s ease;
    background-color: var(--primary);
    border: 1px solid var(--primary);
  }
}
</style>
