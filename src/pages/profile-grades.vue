<template>
  <div class="grades boxShadow">
    <div class="titleLarge grades-title">Grades</div>

    <div class="groupOne">
      <v-expansion-panels color="rgb(227 255 231)">
        <v-expansion-panel
            v-for="group in firstGroups"
            :key="group"
            :text="firstGroup[2].description"
            :title="group"
        ></v-expansion-panel>
      </v-expansion-panels>
    </div>

    <div class="groupTwo">
      <div class="titleMedium" style="margin-bottom: 16px">Forecast</div>
      <v-expansion-panels>
        <v-expansion-panel
            v-for="group in second"
            :key="group"
            :text="firstGroup[2].description"
            :title="group"
        ></v-expansion-panel>
      </v-expansion-panels>
    </div>

    <div class="grades-group">
      <div>
        <GoogleChartsAnalytics/>
      </div>
      <div>
        <GoogleChartsDonut/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GoogleChartsAnalytics from '@/components/GoogleChartsAnalytics.vue'
import GoogleChartsDonut from '@/components/GoogleChartsDonut.vue'
import { ref } from 'vue'
import { CoursesService } from '@/shared/services/courses.service'

const firstGroup = ref(CoursesService.getCoursesFromSemester(4))

const firstGroups = ref([
  'Linear Algebra and Analytic Geometry. 100%',
  'Fundamentals of Programming. 91%',
  'Mathematical analysis 1. 56%',
  'Programming Technologies and Educational Practice. 87%',
  'Additional chapters of linear algebra. 100%',
  'Mathematical analysis 2. 74%'
])
/*
* Algebra 84
Discrete mathematics 84
Ordinary differential equations 100
Mathematical analysis 3 90
* */
const second = ref([
  'Algebra. 84%',
  'Discrete mathematics. 84%',
  'Ordinary differential equations. 100%',
  'Mathematical analysis. 3 90%'

])
</script>

<style scoped lang="scss">
.grades {
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  flex-direction: column;
  gap: 24px;
  display: flex;


  &-group {
    display: flex;

    &:first-child {
      max-width: 400px;
    }
  }
}
</style>
