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
      <div class="infoData-field">
        <span class="material-symbols-outlined">{{ "person_2" }}</span>
        <div class="textLarge">Fullname:</div>
        <div class="text greyText">{{ teacher.fullName }}</div>
      </div>
      <div class="infoData-field">
        <span class="material-symbols-outlined">{{ "subject" }}</span>
        <div class="textLarge">Subjects:</div>
        <div class="text greyText">{{ teacher.subjects }}</div>
      </div>
      <div class="infoData-field">
        <span class="material-symbols-outlined">{{ "license" }}</span>
        <div class="textLarge">Degree:</div>
        <div class="text greyText">{{ teacher.degree }}</div>
      </div>
      <div class="infoData-field">
        <span class="material-symbols-outlined">{{ "mail" }}</span>
        <div class="textLarge">Contact info:</div>
        <div class="text primaryText">{{ teacher.contact_info }}</div>
      </div>
      <div class="infoData-field">
        <span class="material-symbols-outlined">{{ "wc" }}</span>
        <div class="textLarge">Gender:</div>
        <div class="text greyText">{{ teacher.gender }}</div>
      </div>
    </div>
  </v-dialog>

<!--  <v-bottom-sheet v-model="dialog" inset>-->
<!--    <div class="teacher-info">-->
<!--      <div class="infoData-field">-->
<!--        <span class="material-symbols-outlined">{{ "person_2" }}</span>-->
<!--        <div class="textLarge">Fullname:</div>-->
<!--        <div class="text greyText">{{ teacher.fullName }}</div>-->
<!--      </div>-->
<!--      <div class="infoData-field">-->
<!--        <span class="material-symbols-outlined">{{ "subject" }}</span>-->
<!--        <div class="textLarge">Subjects:</div>-->
<!--        <div class="text greyText">{{ teacher.subjects }}</div>-->
<!--      </div>-->
<!--      <div class="infoData-field">-->
<!--        <span class="material-symbols-outlined">{{ "license" }}</span>-->
<!--        <div class="textLarge">Degree:</div>-->
<!--        <div class="text greyText">{{ teacher.degree }}</div>-->
<!--      </div>-->
<!--      <div class="infoData-field">-->
<!--        <span class="material-symbols-outlined">{{ "mail" }}</span>-->
<!--        <div class="textLarge">Contact info:</div>-->
<!--        <div class="text primaryText">{{ teacher.contact_info }}</div>-->
<!--      </div>-->
<!--      <div class="infoData-field">-->
<!--        <span class="material-symbols-outlined">{{ "wc" }}</span>-->
<!--        <div class="textLarge">Gender:</div>-->
<!--        <div class="text greyText">{{ teacher.gender }}</div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </v-bottom-sheet>-->
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
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 16px;
  padding: 16px;
  min-width: 500px;
}

.infoData-field {
  display: flex;
  align-items: center;
  gap: 6px;
}

span {
  color: var(--primary);
  font-size: 30px;
  margin-right: 8px;
}
</style>
