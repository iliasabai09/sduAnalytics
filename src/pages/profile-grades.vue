<template>
  <div class="grades boxShadow">
    <div class="grades-header">
<!--      <div class="headlineLarge">Grades info</div>-->
      <div>
        <v-switch label="Table view" hide-details color="primary" v-model="tableView"></v-switch>
      </div>
    </div>
    <div class="grades-main">
      <ProfileGradesTable :grades="courses" v-if="tableView"/>
      <ProfileGradesIndicator :grades="courses" v-if="!tableView"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { CoursesService } from '@/shared/services/courses.service'
import ProfileGradesTable from '../components/ProfileGradesTable.vue'
import ProfileGradesIndicator from '../components/ProfileGradesIndicator.vue'

const courses: Ref<any[]> = ref([])
const tableView = ref(true)

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
