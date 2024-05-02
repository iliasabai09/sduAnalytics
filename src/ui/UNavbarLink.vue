<template>
  <a @click.prevent="scrollToSection(link)" :href="`/#${link}`" :style="{ color: color }">{{ title }}</a>
</template>

<script setup lang="ts">
import { scrollToSection } from '@/utils/functions/scrollToSection'

defineProps({
  link: {
    type: String,
    default: '#',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false
  }
})

</script>

<style scoped lang="scss">
a {
  font-size: 16px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
