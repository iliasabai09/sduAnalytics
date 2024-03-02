<template>
  <div class="titleGroup">
    <div class="_secondaryTitle">{{ subTitle }}</div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.titleGroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 0 auto 36px;
  width: fit-content;
}

.title {
  color: #404040;
  font-size: 32px;
  font-weight: bold;
}
</style>
