<template>
  <div class="wrapper">
    <div class="teachers">
      <TeacherCard v-for="_ in 6"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import TeacherCard from '@/components/TeacherCard.vue'</script>

<style scoped lang="scss">
.wrapper {

}

.teachersTitle {
  margin-bottom: 16px;
}

.teachers {
  width: 100%;
  display: grid;
  column-gap: 16px;
  row-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}
</style>
