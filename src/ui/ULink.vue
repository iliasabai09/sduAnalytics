<template>
  <router-link :to="link" class="link">
    <slot/>
  </router-link>
</template>

<script setup lang="ts">
defineProps({
  link: {
    type: String,
    default: '/',
    required: true
  }
})
</script>

<style scoped lang="scss">
.link {
  color: #656565;
  transition: .3s ease;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;

  &:hover {
    transition: .3s ease;
    color: #000;
  }
}
</style>
