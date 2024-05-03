<template>
  <div class="courses">
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
      <v-expansion-panels>
        <v-expansion-panel
            v-for="group in secondGroups"
            :key="group"
            :text="firstGroup[0].description"
            :title="group"
        ></v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CoursesService } from '@/shared/services/courses.service'

const firstGroups = ref([
  'Linear Algebra and Analytic Geometry',
  'Fundamentals of Programming',
  'Mathematical analysis 1',
  'Programming Technologies and Educational Practice',
  'Additional chapters of linear algebra',
  'Mathematical analysis 2'
])

const secondGroups = ref([
  'Algebra',
  'Discrete mathematics',
  'Ordinary differential equations',
  'Mathematical analysis 3',
  'Classical mechanics',
  'Theory of Probablility and Mathematical Statistics',
  'Mathematical and Complex analysis',
  'Data wrangling and visualization',
  'Numerical methods'
])
const firstGroup = ref(CoursesService.getCoursesFromSemester(4))

</script>

<style scoped lang="scss">
.courses {
  width: 100%;
  box-sizing: border-box;
  //border-radius: 16px;
  //overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
