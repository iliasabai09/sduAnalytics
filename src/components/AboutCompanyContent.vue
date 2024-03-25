<template>
  <div class="wrapper">
    <div class="_secondaryTitle">О НАШЕЙ КОМПАНИИ</div>
    <h3 class="_moduleTitle">Предоставление вашему бизнесу качественных ИТ-услуг - наша основная миссия и призвание</h3>
    <p>Мы - команда профессионалов, целеустремленных на предоставление вашему бизнесу высококачественных ИТ-услуг. Наша
      страсть к инновациям и стремление к превосходству позволяют нам создавать и поддерживать современные, эффективные
      решения, которые оптимизируют вашу деятельность и удовлетворяют ваши потребности.</p>
    <div class="indicator-group">
      <UPercentIndicator title="IT Консультация" percent="90"/>
      <UPercentIndicator title="Облачные решения" percent="75"/>
      <UPercentIndicator title="Управляемые ИТ-услуги" percent="85"/>
    </div>
    <UButton title="Узнать больше"/>
  </div>
</template>

<script setup lang="ts">
import UPercentIndicator from '@/ui/UPercentIndicator.vue'
import UButton from '@/ui/UButton.vue'</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.indicator-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

p {
  font-size: 16px;
  line-height: 1.8;
  color: #5f5f5f;
}

</style>
