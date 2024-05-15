<template>
  <div class="courses">
    <div>
      <div class="titleLarge text-green">Completed courses</div>
      <v-card
          class="courses-list"
      >
        <v-list
            :items="courses.filter(course => course?.grade)"
            item-title="title"
            item-value="title"
        ></v-list>
      </v-card>
    </div>
    <div>
      <div class="titleLarge greyText">Other courses</div>
      <v-card
          class="courses-list"
      >
        <v-list
            :items="courses"
            item-title="title"
            item-value="title"
        ></v-list>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CoursesService } from '@/shared/services/courses.service';
import { onMounted } from 'vue';

const courses = ref([]);

onMounted(() => {
  courses.value = CoursesService.getGroupedCourses();
  console.log(courses.value);
});

</script>

<style scoped lang="scss">
.courses {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  padding: 16px;
  border-radius: 16px;
  border: 2px solid #ededed;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .titleLarge {
    padding-bottom: 12px;
  }

  &-list {
    width: 100%;
    border-radius: 16px;
  }
}
</style>
