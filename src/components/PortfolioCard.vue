<template>
  <img :src="'/public/images/' + img + '.jpg'" alt="portfolioImg">
</template>

<script setup lang="ts">
defineProps({
  img: {
    type: String,
    default: '',
    required: true
  }
});
</script>

<style scoped lang="scss">
img {
  width: 100%;
  border-radius: 8px;
}
</style>
