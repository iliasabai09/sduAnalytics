<template>
  <div class="grades boxShadow">
    <div class="grades-header">
      <div class="titleMedium">Grades info</div>
      <div>
        <v-switch label="Table view" hide-details color="primary"></v-switch>
      </div>
    </div>
    <div class="grades-main">
      <ProfileGradesTable :grades="courses"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { CoursesService } from '@/shared/services/courses.service'
import ProfileGradesTable from '../components/ProfileGradesTable.vue'

const courses: Ref<any[]> = ref([])

onMounted(() => {
  courses.value = CoursesService.getGroupedCourses()
  console.log(courses.value)
})

</script>

<style scoped lang="scss">
.grades {
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}

//.grades {
//  background-color: #fff;
//  border-radius: 16px;
//  padding: 16px;
//  flex-direction: column;
//  gap: 24px;
//  display: flex;
//
//
//  &-group {
//    display: flex;
//
//    &:first-child {
//      max-width: 400px;
//    }
//  }
//}
</style>
