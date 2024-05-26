<template>
  <div class="groups">
    <div class="group">
      <div class="titleLarge">Completed</div>
      <v-table class="group-table-1">
        <thead style="white-space: nowrap;font-weight: bold" class="textLarge">
        <tr>
          <th class="text-left">
            id
          </th>
          <th class="text-left">
            name
          </th>
          <th class="text-left">
            grade
          </th>
          <th class="text-left">
            with the letter
          </th>
          <th class="text-left">
            ballman
          </th>
          <th class="text-left">
            traditional system
          </th>
        </tr>
        </thead>
        <tbody>
        <template v-for="(grade,idx) in grades.filter(g => g?.grade)">
          <tr>
            <td>{{ ++idx }}</td>
            <td>{{ grade.title }}</td>
            <td
                class="bodyMedium with-letter"
                :class="'traditionalSystemColor-' + removeSpaces(gradeTraditionalSystem(grade.grade))"
            >
              {{ grade.grade }}
            </td>
            <td
                class="bodyMedium with-letter"
                :class="'traditionalSystemColor-' + removeSpaces(gradeTraditionalSystem(grade.grade))"
            >
              {{ gradeLetter(grade.grade) }}
            </td>
            <td
                class="bodyMedium with-letter"
                :class="'traditionalSystemColor-' + removeSpaces(gradeTraditionalSystem(grade.grade))"
            >
              {{ gradeBallman(grade.grade) }}
            </td>
            <td
                class="textLarge"
                :class="'traditionalSystemColor-' + removeSpaces(gradeTraditionalSystem(grade.grade))"
            >
              {{ gradeTraditionalSystem(grade.grade) }}
            </td>
          </tr>
        </template>
        </tbody>
      </v-table>
    </div>
    <div class="group">
      <div class="titleLarge">Awaiting study</div>
      <v-table class="group-table-2">
        <thead style="white-space: nowrap" class="textLarge">
        <tr>
          <th class="text-left">
            id
          </th>
          <th class="text-left">
            name
          </th>
          <th class="text-left">
            grade
          </th>
          <th class="text-left">
            with the letter
          </th>
          <th class="text-left">
            ballman
          </th>
          <th class="text-left">
            traditional system
          </th>
        </tr>
        </thead>
        <tbody>
        <template v-for="(grade,idx) in grades.filter(g => !g?.grade && Number(g.semester) === semester)">
          <tr>
            <td>{{ ++idx }}</td>
            <td>{{ grade.title }}</td>
            <td
                class="textLarge"
                :class="'traditionalSystemColor-' + removeSpaces(gradeTraditionalSystem(gradeAnalyticConstructor(grade.title)))"
            >
              {{ gradeAnalyticConstructor(grade.title) }}
            </td>
            <td
                class="textLarge"
                :class="'traditionalSystemColor-' + removeSpaces(gradeTraditionalSystem(gradeAnalyticConstructor(grade.title)))"
            >
              {{ gradeLetter(gradeAnalyticConstructor(grade.title)) }}
            </td>
            <td
                class="textLarge"
                :class="'traditionalSystemColor-' + removeSpaces(gradeTraditionalSystem(gradeAnalyticConstructor(grade.title)))"
            >
              {{ gradeBallman(gradeAnalyticConstructor(grade.title)) }}
            </td>
            <td
                class="textLarge"
                :class="'traditionalSystemColor-' + removeSpaces(gradeTraditionalSystem(gradeAnalyticConstructor(grade.title)))"
            >
              {{ gradeTraditionalSystem(gradeAnalyticConstructor(grade.title)) }}
            </td>
          </tr>
        </template>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted, ref } from 'vue'
import { UserService } from '../shared/services/user.service'

const user: any = ref(UserService.getUser())
const semester = computed(() => {
  return Number(user.value.course - 1) * 2 + Number(user.value.semester) + 1
})
const props = defineProps({
  grades: {
    type: Array,
    required: true
  }
})

function gradeTraditionalSystem(grade) {
  if (!grade) return ''
  if (grade >= 90) return 'Very good'
  if (grade >= 70 && grade < 90) return 'Good'
  if (grade >= 50 && grade < 70) return 'Satisfying'
  return 'Unsatisfactory'
}

function gradeLetter(grade) {
  if (grade >= 95) return 'A'
  if (grade >= 90 && grade < 95) return 'A-'
  if (grade >= 85 && grade < 90) return 'B+'
  if (grade >= 80 && grade < 85) return 'B'
  if (grade >= 75 && grade < 80) return 'B-'
  if (grade >= 70 && grade < 75) return 'C+'
  if (grade >= 65 && grade < 70) return 'C'
  if (grade >= 60 && grade < 65) return 'C-'
  if (grade >= 55 && grade < 60) return 'D+'
  if (grade >= 50 && grade < 55) return 'D'
  if (grade >= 25 && grade < 50) return 'FX'
  if (grade >= 0 && grade < 25) return 'F'
}

function gradeBallman(grade) {
  if (grade >= 95) return '4'
  if (grade >= 90 && grade < 95) return '3.67'
  if (grade >= 85 && grade < 90) return '3.33'
  if (grade >= 80 && grade < 85) return '3'
  if (grade >= 75 && grade < 80) return '2.67'
  if (grade >= 70 && grade < 75) return '2.33'
  if (grade >= 65 && grade < 70) return '2'
  if (grade >= 60 && grade < 65) return '1.67'
  if (grade >= 55 && grade < 60) return '1.33'
  if (grade >= 50 && grade < 55) return '1'
  if (grade >= 25 && grade < 50) return '0'
  if (grade >= 0 && grade < 25) return '0'
}

function removeSpaces(word) {
  return word.replace(/\s+/g, '').toLowerCase()
}

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

onMounted(() => {
  console.log(props.grades)
})
</script>

<style scoped lang="scss">
.groups {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.group {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &-table-1 {
    background-color: #b2ffac52;
    border-radius: 16px;
    border: 2px solid #e1e1e1;
  }

  &-table-2 {
    background-color: rgba(172, 255, 245, 0.32);
    border-radius: 16px;
    border: 2px solid #e1e1e1;
  }
}

.traditionalSystemColor-verygood {
  color: #00ff00;
}

.traditionalSystemColor-good {
  color: #ccd312;
}

.traditionalSystemColor-satisfying {
  color: #d77700;
}

.traditionalSystemColor-unsatisfactory {
  color: red;
}
</style>
