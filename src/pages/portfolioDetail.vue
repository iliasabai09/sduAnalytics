<template>
  <div>
    <div class="header">
      <h2>Детали портфолио</h2>
    </div>
    <div class="_container content">
      <img src="/public/images/portfolio-details-banner.jpg" alt="portfolio-details-banner">
      <PortfolioDetailInfoModule/>
      <PortfolioDetailSpecsModule/>
    </div>
  </div>
</template>

<script setup lang="ts">
import PortfolioDetailSpecsModule from '@/modules/PortfolioDetailSpecsModule.vue'
import PortfolioDetailInfoModule from '@/modules/PortfolioDetailInfoModule.vue'</script>

<style scoped lang="scss">
.header {
  background: url(data:image/jpeg;base64,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) fixed repeat;
  background-size: 100px 100px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: #ffffff;
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 0;
    font-family: 'Dosis', sans-serif;
    text-align: center;
  }
}

.content {
  margin: 50px auto;

  img {
    width: 100%;
    border-radius: 16px;
    margin-bottom: 24px;
  }
}

</style>
