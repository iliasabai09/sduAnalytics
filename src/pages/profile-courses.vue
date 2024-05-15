<template>
  <div class="courses">
    <div>
      <div class="titleLarge" style="color: var(--secondary)">Completed courses</div>
      <v-card
          class="courses-list"
      >
        <v-list density="comfortable">
          <v-list-item
              color="secondary"
              @click="toCourseDetail(item)"
              v-for="(item, i) in courses.filter(course => course?.grade)"
              :key="i"
              :value="item"
          >
            <v-list-item-title style="font-weight: 600;padding-bottom: 4px" v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle style="font-weight: 600; color: #848484" v-text="item.description"></v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
    <div>
      <div class="titleLarge text-blue">Other courses</div>
      <v-card
          class="courses-list"
      >
        <v-list density="comfortable">
          <v-list-item
              v-for="(item, i) in courses.filter(course => !course?.grade)"
              :key="i"
              :value="item"
              color="primary"
          >
            <v-list-item-title style="font-weight: 600;padding-bottom: 4px" v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle style="font-weight: 600; color: #848484" v-text="item.description"></v-list-item-subtitle>
          </v-list-item>
        </v-list>
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
});

function toCourseDetail(item) {
  console.log(item);
}

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
