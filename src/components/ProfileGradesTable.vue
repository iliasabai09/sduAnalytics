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
      <tr v-if="grade?.grade">
        <td>{{ ++idx }}</td>
        <td>{{ grade.title }}</td>
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
      <tr v-else>
        <td>{{ ++idx }}</td>
        <td>{{ ++idx }}</td>
        <td>{{ ++idx }}</td>
      </tr>
    </template>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  grades: {
    type: Array,
    required: true
  }
})

function gradeTraditionalSystem(grade) {
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
