<template>
  <div class="content">
    <h6 class="_secondaryTitle">Почему нужно выбрать нас?</h6>
    <h3 class="_moduleTitle">
      Увеличьте производительность своего бизнеса
    </h3>
    <div class="_moduleDescription">
      При выборе нашей аутсорс компании вы получаете доступ к множеству преимуществ, которые делают нас идеальным партнером для вашего бизнеса
    </div>
    <div class="features">
      <UOverviewItem v-for="item in items" :text="item.text"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import UOverviewItem from '@/ui/UOverviewItem.vue';
import { ref } from 'vue';

const items = ref([
  {
    text: 'Глубокая техничесская экспертиза'
  },
  {
    text: 'Индивидуальный подход'
  },
  {
    text: 'Успешный опыт и довольные клиенты'
  },
  {
    text: 'Профессионализм и ответственность'
  },
  {
    text: 'Прозрачность и своевременная отчетность'
  },
  {
    text: 'Гибкие условия сотрудничества'
  }
]);
</script>

<style scoped lang="scss">
.content {
  width: 100%;
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
