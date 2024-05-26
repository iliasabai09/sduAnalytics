<template>
  <div class="wrapper">
    <div class="items-group">
      <div class="item-wrap" v-for="grade in grades">
        <div class="item bodyMedium" :style="{height:grade.grade + '%', backgroundColor:bg}">
          {{ grade.grade }}
        </div>
        <div class="smallLarge item-course">jse-212</div>
        <v-tooltip
            activator="parent"
            location="bottom"
        >{{ grade.title }}
        </v-tooltip>
      </div>
    </div>
    <div class="items-label">{{ getSemesterLabel(grades[0].semester) }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  grades: {
    type: Array,
    required: true
  },
  bg: {
    type: String,
    required: false,
    default: '#b2ffac52'
  }
})

function getSemesterLabel(sem) {
  if (Number(sem) === 1) return '1 course 1 sem'
  if (Number(sem) === 2) return '1 course 2 sem'
  if (Number(sem) === 3) return '2 course 1 sem'
  if (Number(sem) === 4) return '2 course 2 sem'
  if (Number(sem) === 5) return '3 course 1 sem'
  if (Number(sem) === 6) return '3 course 2 sem'
}

</script>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.items-group {
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
}

.items-label {
  text-align: center;
}

.item {
  width: 45px;
  border: 1px solid grey;
  text-align: center;

  &-course {
    text-align: center;
  }
}

.item-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
</style>
