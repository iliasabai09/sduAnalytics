<template>
  <div class="grades boxShadow">
    <div class="titleLarge grades-title">Аналитика цен</div>
    <div class="grades-group">
      <div>
        <GoogleChartsAnalytics/>
      </div>
      <div>
        <GoogleChartsDonut/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GoogleChartsAnalytics from '@/components/GoogleChartsAnalytics.vue'
import GoogleChartsDonut from '@/components/GoogleChartsDonut.vue'</script>

<style scoped lang="scss">
.grades {
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;

  &-title {
    margin-bottom: 16px;
  }

  &-group {
    display: flex;

    &:first-child {
      max-width: 400px;
    }
  }
}
</style>
