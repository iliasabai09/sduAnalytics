<template>
  <div class="grades boxShadow">
    <div class="grades-header">
      <div class="titleMedium">Grades info</div>
      <div>
        <v-switch label="Table view" hide-details color="primary"></v-switch>
      </div>
    </div>
    <div class="gradesInfo">
      <div>
        <div class="gradesInfo-completed"></div>
        <div class="bodyMedium">completed</div>
      </div>
      <div>
        <div class="gradesInfo-analytics"></div>
        <div class="bodyMedium">analytics</div>
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

.gradesInfo {
  display: flex;
  align-items: center;
  gap: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &-completed {
    width: 30px;
    height: 15px;
    background-color: #b2ffac52;
  }

  &-analytics {
    width: 30px;
    height: 15px;
    background-color: #ACFFF551;
  }
}
</style>
