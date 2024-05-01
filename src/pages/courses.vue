<template>
  <div class="form">
    <v-text-field label="title" v-model="form.title"></v-text-field>
    <v-text-field label="semester" v-model="form.semester"></v-text-field>
    <v-text-field label="description" v-model="form.description"></v-text-field>
    <v-select
        clearable
        v-model="form.teachers"
        label="teachers"
        :items="teachers.map((teacher:any) => teacher.fullName)"
        multiple
    ></v-select>
    <div class="group">
      <div>course_plan</div>
      <div class="group-fields">
        <v-text-field label="week" v-model="course_plan.week"></v-text-field>
        <v-text-field label="topics" v-model="course_plan.topics"></v-text-field>
        <v-text-field label="title" v-model="course_plan.activity"></v-text-field>
        <v-btn @click="addAndReset('course_plan',course_plan)">Add</v-btn>
      </div>
      <div class="group-data">{{ form.course_plan.length }}</div>
    </div>

    <div class="group">
      <div>reading_list</div>
      <div class="group-fields">
        <v-text-field label="type" v-model="reading_list.type"></v-text-field>
        <v-text-field label="authors" v-model="reading_list.authors"></v-text-field>
        <v-text-field label="title" v-model="reading_list.title"></v-text-field>
        <v-text-field label="publishing_year" v-model="reading_list.publishing_year"></v-text-field>
        <v-text-field label="isbn" v-model="reading_list.isbn"></v-text-field>
        <v-text-field label="publisher_web_site" v-model="reading_list.publisher_web_site"></v-text-field>
        <v-btn @click="addAndReset('reading_list',reading_list)">Add</v-btn>
      </div>
      <div class="group-data">{{ form.reading_list.length }}</div>
    </div>

    <div class="group">
      <div>assessment_methods</div>
      <div class="group-fields">
        <v-text-field label="assessment" v-model="assessment_methods.assessment"></v-text-field>
        <v-text-field label="description" v-model="assessment_methods.description"></v-text-field>
        <v-text-field label="qty" v-model="assessment_methods.qty"></v-text-field>
        <v-text-field label="percent" v-model="assessment_methods.percent"></v-text-field>
        <v-btn @click="addAndReset('assessment_methods',assessment_methods)">Add</v-btn>
      </div>
      <div class="group-data">{{ form.assessment_methods.length }}</div>
    </div>
    <v-btn @click="submit">SUBMIT FOR AIZERE</v-btn>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { TeachersService } from '@/shared/services/teachers.service'

function addAndReset(key: any, val: any) {
  form.value[key].push(val)
  clearMiniForms()
}

const form: any = ref({
  title: null,
  semester: null,
  description: '',
  teachers: [],
  course_plan: [],
  reading_list: [],
  assessment_methods: []
})

const course_plan: any = ref({
  week: null,
  topics: null,
  activity: null
})

const reading_list: any = ref({
  type: '',
  authors: '',
  title: '',
  publishing_year: '',
  isbn: '',
  publisher_web_site: ''
})

const assessment_methods: any = ref({
  assessment: '',
  description: '',
  qty: '',
  percent: ''
})

function clearMiniForms() {
  course_plan.value = {
    week: null,
    topics: null,
    activity: null
  }

  reading_list.value = {
    type: '',
    authors: '',
    title: '',
    publishing_year: '',
    isbn: '',
    publisher_web_site: ''
  }

  assessment_methods.value = {
    assessment: '',
    description: '',
    qty: '',
    percent: ''
  }
}

function clearForm() {
  form.value = {
    title: null,
    semester: null,
    description: '',
    teachers: [],
    course_plan: [],
    reading_list: [],
    assessment_methods: []
  }
}

function toggleFilters() {
  form.value.teachers = form.value.teachers.map((t: any) => {
    return {
      id: teachers.value.find((fi: any) => fi.fullName === t).id
    }
  })
}

const teachers: any = ref([])

async function submit() {
  try {
    toggleFilters()
    await fetch(`https://sduanalyti-default-rtdb.firebaseio.com/courses/${Date.now()}.json`, {
      method: 'put',
      body: JSON.stringify(form.value)
    })
    clearForm()
    alert('Айзок походу успех')
  } catch (e: any) {
    alert(e.message)
  }

}

onMounted(() => {
  teachers.value = TeachersService.getTeachers()
})

</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 100px auto;
  max-width: 700px;
}

.group {
  &-fields {
    display: flex;
    gap: 16px;
  }
}
</style>
