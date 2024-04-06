<template>
  <div class="item" :class="hoverType">
    <img :src="'/icons/' + social.icon + '.svg'" alt="icon" width="22">
  </div>
</template>

<script setup lang="ts">

defineProps({
  social: {
    type: Object,
    required: true
  },
  hoverType: {
    type: String,
    required: false,
    default: 'hoverToPink'
  }
});
</script>

<style scoped lang="scss">
.item {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.hoverToPink {
  border: 1px solid rgb(255, 255, 255, 0.2);
  color: #fff;
  transition: .3s ease;

  &:hover {
    transition: .3s ease;
    background-color: var(--primary);
    border: 1px solid var(--primary);
  }
}

.hoverToWhite {
  border: 1px solid var(--primary);
  background-color: var(--primary);
  transition: .3s ease;

  &:hover {
    scale: 1.1;
    transition: .3s ease;
  }
}
</style>
