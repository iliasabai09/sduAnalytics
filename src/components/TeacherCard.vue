<template>
  <div class="teacher boxShadow" @click="dialog = true">
    <div class="teacher-img">
      <img :src="teacher.img || computedImage"
           alt="teacher">
    </div>
    <div class="teacher-subject bodyMedium">{{ teacher.degree }}</div>
    <div class="teacher-title textLarge">{{ teacher.fullName }}</div>
  </div>

  <v-dialog
      v-model="dialog"
      width="auto"
  >
    <div class="teacher-info">

    </div>
    <pre>{{ teacher }}</pre>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const dialog = ref(false)
const props = defineProps({
  teacher: {
    type: Object,
    required: true
  }
})

const computedImage = computed(() => {
  return props.teacher.gender === 'male'
      ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wdqJ1t88ixF2kA3HI-keBoetJMKfIAngUsdR_k24EQ&s'
      : 'https://www.shareicon.net/data/512x512/2016/07/26/802033_user_512x512.png'
})
</script>

<style scoped lang="scss">
.teacher {
  border-radius: 16px;
  padding: 16px;
  min-width: 220px;
  text-align: center;
  cursor: pointer;
  background-color: #fff;

  &-img {
    margin-bottom: 8px;

    img {
      border-radius: 8px;
      width: 80%;
    }
  }

  &-title {
    color: var(--primary);
  }

  &-subject {
    margin-bottom: 4px;
    color: var(--grey);
  }
}

.teacher-info {
  background-color: #fff;
}
</style>
