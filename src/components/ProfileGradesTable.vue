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
        traditional system
      </th>
    </tr>
    </thead>
    <tbody>
    <template v-for="(grade,idx) in grades">
      <tr v-if="grade?.grade">
        <td>{{ ++idx }}</td>
        <td>{{ grade.title }}</td>
        <td>{{ grade.title }}</td>
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
  color: #efff00;
}

.traditionalSystemColor-satisfying {
  color: #d77700;
}

.traditionalSystemColor-unsatisfactory {
  color: red;
}
</style>
