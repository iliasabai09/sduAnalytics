<template>
  <div class="item">{{ text }}</div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<style scoped lang="scss">
.item {
  color: var(--titlePrimary);
  font-size: 16px;
  font-weight: 600;
  padding: 13px 15px;
  border-radius: 5px;
  border-left: 2px solid var(--primary);
  background-color: #ffffff;
  -webkit-box-shadow: -1px 3px 20px 0px rgb(82, 90, 101, 0.1);
  box-shadow: -1px 3px 20px 0px rgb(82, 90, 101, 0.1);
  -webkit-transition: 0.4s;
  transition: .6s ease;
  cursor: pointer;

  &:hover {
    transition: .6s ease;
    background-color: var(--primary);
    color: #fff;
  }
}
</style>
