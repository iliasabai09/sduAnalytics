<template>
  <div class="content">
    <div class="_secondaryTitle">Почему нам доверяют?</div>
    <h3 class="_moduleTitle">Обеспечьте цифровую трансформацию для услуг вашего розничного бизнеса.</h3>
    <p class="_moduleDescription">Наши клиенты нам доверяют благодаря нашему непревзойденному опыту в области розничного бизнеса и цифровой трансформации. Мы обеспечиваем высокий уровень профессионализма и преданы достижению успеха каждого нашего клиента. Наш подход основан на индивидуальном внимании к потребностям и целям каждого бизнеса, что позволяет нам создавать и внедрять эффективные решения, способствующие росту и развитию.</p>
    <div class="features">
      <UOverviewItem :text="'Защитите ваш бизнес'"/>
      <UOverviewItem :text="'Безопасность данных'"/>
      <UOverviewItem :text="'Управление вашим бизнесом'"/>
      <UOverviewItem :text="'Сетевая безопасность'"/>
      <UOverviewItem :text="'Владельцы малых бизнесов'"/>
      <UOverviewItem :text="'Мониторинг сети'"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import UOverviewItem from '@/ui/UOverviewItem.vue'</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.features {
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 16px;
  gap: 16px;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
}
</style>
