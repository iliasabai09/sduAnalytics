<template>
  <v-table>
    <thead style="color: var(--secondary);white-space: nowrap" class="textLarge">
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
    <template v-for="(grade,idx) in grades">
      <tr v-if="grade?.grade" style="background-color: #b2ffac52">
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
      <tr v-else style="background-color: rgba(172,255,245,0.32)">
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
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue'

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
  return props.grades.find(grade => grade.title === title)?.grade || 0
}

function gradeAnalyticConstructor(key) {
  const obj = {
    'Numerical methods': 12.02 - 0.13 * getGrade('Ordinary differential equations') + 0.14 * getGrade('Mathematical analysis 1') - 0.25 * getGrade('Classical mechanics') - 0.027 * getGrade('Theory of Probablility and Mathematical Statistics') + 1.12 * getGrade('Mathematical and Complex analysis'),
    'Data wrangling and visualization': 12.63 + 0.54 * getGrade('Additional chapters of linear algebra') + 0.34 * getGrade('Ordinary differential equations') + 0.26 * getGrade('Classical mechanics') + 0.28 * getGrade('Mathematical and Complex analysis') - 0.49 * getGrade('Theory of Probablility and Mathematical Statistics'),
    'Classical mechanics': 17.45 + 0.09 * getGrade('Mathematical analysis') 2+0,09*Algebra-0,08*Discrete mathematics+0,54*Ordinary differential equations+0,12*Mathematical analysis 3,
  }
  return obj[key]
}

onMounted(() => {
  console.log(props.grades)
})
</script>

<style scoped lang="scss">
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
