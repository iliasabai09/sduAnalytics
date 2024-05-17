<template>
  <template v-if="!activeCourse">
    <div class="courses">
      <div>
        <div class="titleLarge" style="color: var(--secondary)">Completed courses</div>
        <v-card
            class="courses-list"
        >
          <v-list density="comfortable" color="primary">
            <v-list-item
                color="secondary"
                @click="toCourseDetail(item)"
                v-for="(item, i) in courses.filter((course) => course?.grade)"
                :key="i"
                :value="item"
            >
              <v-list-item-title style="font-weight: 600;padding-bottom: 4px" v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle style="font-weight: 600; color: #848484"
                                    v-text="item.description"></v-list-item-subtitle>
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
                @click="toCourseDetail(item)"
                v-for="(item, i) in courses.filter((course:any) => !course?.grade)"
                :key="i"
                :value="item"
                color="primary"
            >
              <v-list-item-title style="font-weight: 600;padding-bottom: 4px" v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle style="font-weight: 600; color: #848484"
                                    v-text="item.description"></v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
    </div>
  </template>
  <template v-if="activeCourse">
    <div class="activeCourse boxShadow">
      <div class="titleMedium activeCourse-title" @click="activeCourse = null">
        <span class="material-symbols-outlined">arrow_back</span>
        <div>{{ activeCourse.title }}</div>
      </div>
      <div class="activeCourse-tabs">
        <v-tabs
            v-model="tab"
            color="primary"
        >
          <v-tab value="description"> Description</v-tab>
          <v-tab value="reading_list">Reading list</v-tab>
          <v-tab value="teachers">Teachers</v-tab>
          <v-tab value="course_plan">Course plan</v-tab>
          <v-tab value="assessment_methods">Assessment methods</v-tab>
        </v-tabs>
      </div>
      <div class="activeCourse-value">
        <template v-if="tab === 'assessment_methods'">
          <v-table>
            <thead style="color: var(--secondary)" class="titleMedium">
            <tr>
              <th class="text-left">
                assessment
              </th>
              <th class="text-left">
                description
              </th>
              <th class="text-left">
                percent
              </th>
              <th class="text-left">
                quantity
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in activeCourse.assessment_methods"
                :key="item.name"
            >
              <td>{{ item.assessment }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.percent }}</td>
              <td>{{ item.qty }}</td>
            </tr>
            </tbody>
          </v-table>
        </template>
        <template v-if="tab === 'course_plan'">
          <v-table>
            <thead style="color: var(--secondary)" class="titleMedium">
            <tr>
              <th class="text-left">
                activity
              </th>
              <th class="text-left">
                topics
              </th>
              <th class="text-left">
                week
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in activeCourse.course_plan"
                :key="item.name"
            >
              <td>{{ item.activity }}</td>
              <td>{{ item.topics }}</td>
              <td>{{ item.week }}</td>
            </tr>
            </tbody>
          </v-table>
        </template>
        <template v-if="tab === 'description'">
          <div class="textLarge text-grey activeCourse-description">{{ activeCourse.description }}</div>
        </template>
        <template v-if="tab === 'reading_list'">
          <v-table>
            <thead style="color: var(--secondary);white-space: nowrap" class="textLarge">
            <tr>
              <th class="text-left">
                authors
              </th>
              <th class="text-left">
                isbn
              </th>
              <th class="text-left">
                publisher web site
              </th>
              <th class="text-left">
                publishing year
              </th>
              <th class="text-left">
                title
              </th>
              <th class="text-left">
                type
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in activeCourse.reading_list"
                :key="item.name"
            >
              <td>{{ item.authors }}</td>
              <td>{{ item.isbn }}</td>
              <td>{{ item.publisher_web_site }}</td>
              <td>{{ item.publishing_year }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.type }}</td>
            </tr>
            </tbody>
          </v-table>
        </template>
        <template v-if="tab === 'teachers'">
          <div class="teachers">
            <TeacherCard v-for="teacher in activeCourse.teachers" :teacher="teacher"/>
          </div>
        </template>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { CoursesService } from '@/shared/services/courses.service'
import TeacherCard from '@/components/TeacherCard.vue'

const courses: any = ref([])
const activeCourse: any = ref(null)
const tab: any = ref('description')

onMounted(() => {
  courses.value = CoursesService.getGroupedCourses()
})

function toCourseDetail(item: any) {
  activeCourse.value = item
}

</script>

<style scoped lang="scss">
.teachers {
  width: 100%;
  display: grid;
  column-gap: 16px;
  row-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}

.activeCourse {
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  width: 100%;

  &-title {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    margin-bottom: 12px;
  }

  &-description {
    margin-top: 12px;
  }

  &-tabs {
    //margin-bottom: 12px;
  }

  &-value {

  }
}

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

    &:first-child {
    }
  }
}
</style>
