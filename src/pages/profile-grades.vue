<template>
  <div class="grades boxShadow">
    <div class="grades-header">
      <v-tabs
          style="width: 100%"
          v-model="tab"
          color="primary"
      >
        <v-tab style="width: 50%" value="table">Table view</v-tab>
        <v-tab style="width: 50%" value="analytics">Analytics view</v-tab>
      </v-tabs>
    </div>
    <div class="grades-main">
      <ProfileGradesTable :grades="courses" v-if="tab === 'table'"/>
      <ProfileGradesIndicator :grades="courses" v-if="tab === 'analytics'"/>
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
const tab = ref('table')

onMounted(() => {
  courses.value = CoursesService.getGroupedCourses()
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
    margin-bottom: 12px;
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
