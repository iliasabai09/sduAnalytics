<template>
  <div class="teacher boxShadow">
    <div class="teacher-img">
      <img :src="teacher.img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJ8PzPLg8d2HJkNytkC-WYHjElSVJ3fHRfw&s'"
           alt="teacher">
    </div>
    <div class="teacher-subject bodyMedium">{{ teacher.subjects }}</div>
    <div class="teacher-title textLarge">{{ teacher.fullName }}</div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ITeacher } from '@/shared/interfaces/teacher.interface'

defineProps({
  teacher: {
    type: Object as PropType<ITeacher[]>
  }
})
</script>

<style scoped lang="scss">
.teacher {
  border-radius: 16px;
  padding: 16px;
  min-width: 220px;
  text-align: center;
  cursor: pointer;
  background-color: #fff;

  &-img {
    margin-bottom: 8px;

    img {
      border-radius: 8px;
      width: 80%;
    }
  }

  &-title {
    color: var(--primary);
  }

  &-subject {
    margin-bottom: 4px;
    color: var(--grey);
  }
}
</style>
