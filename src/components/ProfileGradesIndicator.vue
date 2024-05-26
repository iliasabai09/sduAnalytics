<template>
  <div class="indicator">
    <div class="indicator-dashboard">
      <IndicatorGroup v-for="group in (semester - 1)" :grades="grades.filter(g => Number(g.semester) === group)"/>
      <IndicatorGroup :grades="computedAnalyzeGrades" :bg="'rgba(172, 255, 245, 0.32)'"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue/dist/vue'
import { computed, ref } from 'vue'
import { UserService } from '../shared/services/user.service'
import IndicatorGroup from './IndicatorGroup.vue'

const props = defineProps({
  grades: {
    type: Array,
    required: true
  }
})

const user: any = ref(UserService.getUser())
const semester = computed(() => {
  return Number(user.value.course - 1) * 2 + Number(user.value.semester) + 1
})

function getGrade(title) {
  const grade = props.grades.find(grade => grade.title.trim().toLowerCase() === title.trim().toLowerCase())?.grade || 0
  return Number(grade)
}

function gradeAnalyticConstructor(key) {
  const obj = {
    'numerical methods': 12.02 - 0.13 * getGrade('Ordinary differential equations') + 0.14 * getGrade('Mathematical analysis 3') - 0.25 * getGrade('Classical mechanics') - 0.027 * getGrade('Theory of Probablility and Mathematical Statistics') + 1.12 * getGrade('Mathematical and Complex analysis'),
    'data wrangling and visualization': 12.63 + 0.54 * getGrade('Additional chapters of linear algebra') + 0.34 * getGrade('Ordinary differential equations') + 0.26 * getGrade('Classical mechanics') + 0.28 * getGrade('Mathematical and Complex analysis') - 0.49 * getGrade('Theory of Probablility and Mathematical Statistics'),
    'classical mechanics': 17.45 + 0.09 * getGrade('Mathematical analysis 2') + 0.09 * getGrade('Algebra') - 0.08 * getGrade('Discrete mathematics') + 0.54 * getGrade('Ordinary differential equations') + 0.12 * getGrade('Mathematical analysis 3'),
    'theory of probablility and mathematical statistics': 12.7 + 0.38 * getGrade('Mathematical analysis 2') + 0.17 * getGrade('Algebra') + 0.065 * getGrade('Discrete mathematics') + 0.097 * getGrade('Ordinary differential equations') + 0.15 * getGrade('Numerical methods'),
    'mathematical and complex analysis': 17.45 + 0.09 * getGrade('Mathematical analysis 2') + 0.09 * getGrade('Algebra') - 0.08 * getGrade('Discrete mathematics') + 0.54 * getGrade('Ordinary differential equations') + 0.12 * getGrade('Mathematical analysis 3'),
    'algebra': 20.9 + 0.07 * getGrade('Mathematical analysis 2') - 0.04 * getGrade('Mathematical analysis 1') + 0.26 * getGrade('Programming Technologies and Educational Practice') + 0.04 * getGrade('Fundamentals of Programming') + 0.34 * getGrade('Additional chapters of linear algebra'),
    'discrete mathematics': 20.9 + 0.07 * getGrade('Mathematical analysis 2') - 0.04 * getGrade('Mathematical analysis 1') + 0.26 * getGrade('Programming Technologies and Educational Practice') + 0.04 * getGrade('Fundamentals of Programming') + 0.34 * getGrade('Additional chapters of linear algebra'),
    'ordinary differential equations': 17.4 - 0.07 * getGrade('Mathematical analysis 2') - 0.06 * getGrade('Mathematical analysis 1') + 0.16 * getGrade('Programming Technologies and Educational Practice') + 0.28 * getGrade('Fundamentals of Programming') + 0.52 * getGrade('Additional chapters of linear algebra'),
    'mathematical analysis 3': 6.92 - 0.013 * getGrade('Mathematical analysis 2') + 0.12 * getGrade('Mathematical analysis 1') + 0.36 * getGrade('Programming Technologies and Educational Practice') + 0.17 * getGrade('Fundamentals of Programming') + 0.31 * getGrade('Additional chapters of linear algebra')
  }
  return Math.trunc(obj[key.toLowerCase()]) > 100 ? 100 : Math.trunc(obj[key.toLowerCase()])
}

const computedAnalyzeGrades = computed(() => {
  console.log('dsds', props.grades.filter(g => Number(g.semester) === semester.value).map(gr => {
    return {
      ...gr,
      grade: gradeAnalyticConstructor(gr.title)
    }
  }))
  return props.grades.filter(g => Number(g.semester) === semester.value).map(gr => {
    return {
      ...gr,
      grade: gradeAnalyticConstructor(gr.title)
    }
  })
})


</script>

<style scoped lang="scss">
.indicator {
  &-dashboard {
    display: flex;
    height: 350px;
    gap: 22px;

    & .dashboard-item {
      width: 40px;
      height: 100%;
      border: 1px solid black;
    }
  }
}
</style>
