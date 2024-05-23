<template>
  <div class=""></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue/dist/vue'
import GoogleChartsDonut from './GoogleChartsDonut.vue'
import GoogleChartsAnalytics from './GoogleChartsAnalytics.vue'

const props = defineProps({
  grades: {
    type: Array,
    required: true
  }
})
</script>

<style scoped lang="scss">

</style>
