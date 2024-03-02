<template>
  <div class="chip">{{ title }}</div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
    required: true
  }
});
</script>

<style scoped lang="scss">
.chip {
  height: 52px;
  width: fit-content;
  padding: 0 24px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 5px 15px 0px rgb(94, 94, 94, 0.15);
  transition: all 0.4s ease-in-out 0s;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: all 0.4s ease-in-out 0s;
    background-color: var(--primary);
  }
}
</style>
