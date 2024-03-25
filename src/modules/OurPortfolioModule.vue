<template>
  <section>
    <div class="_container" id="portfolio">
      <USectionTitle title="Наше портфолио" sub-title="Последние работы"/>
      <div class="content">
        <div class="filters">
          <UChip title="All"/>
          <UChip title="1с"/>
          <UChip title="Сайты"/>
          <UChip title="Сервисы"/>
        </div>
        <div class="portfolios">
          <PortfolioCard img="portfolio-1"/>
          <PortfolioCard img="portfolio-2"/>
          <PortfolioCard img="portfolio-3"/>
          <PortfolioCard img="portfolio-4"/>
          <PortfolioCard img="portfolio-5"/>
          <PortfolioCard img="portfolio-6"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import USectionTitle from '@/ui/USectionTitle.vue';
import UChip from '@/ui/UChip.vue';
import PortfolioCard from '@/components/PortfolioCard.vue';

</script>

<style scoped lang="scss">

section {
  background-color: var(--greyBg);
  padding: 80px 0;
  @media (max-width: 768px) {
    padding: 40px 0;
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.filters {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.portfolios {
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 16px;
  gap: 16px;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
}
</style>
