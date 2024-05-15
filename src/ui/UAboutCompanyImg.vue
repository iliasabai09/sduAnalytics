<template>
<!--  <img src="/public/images/aboutCompanyImage.jpg" alt="aboutCompanyImage">-->
  <img src="https://sdu.edu.kz/wp-content/uploads/2022/05/SDU-1806-min-scaled.jpg" alt="aboutCompanyImage">
<!--  <v-carousel-->
<!--      show-arrows="hover"-->
<!--      cycle-->
<!--      hide-delimiter-background-->
<!--  >-->
<!--    <v-carousel-item-->
<!--        v-for="(slide, i) in slides"-->
<!--        :key="i"-->
<!--    >-->
<!--      <img :src="slide" alt="aboutCompanyImage">-->
<!--    </v-carousel-item>-->
<!--  </v-carousel>-->
</template>
<script setup lang="ts">
import {ref} from "vue";

const slides = ref([
  'https://sdu.edu.kz/wp-content/uploads/2022/05/SDU-1806-min-scaled.jpg',
  'https://sdu.edu.kz/wp-content/uploads/2022/05/SDU-1806-min-scaled.jpg',
  'https://sdu.edu.kz/wp-content/uploads/2022/05/SDU-1806-min-scaled.jpg',
])
</script>
<style scoped>
img {
  border-radius: 8px;
  min-width: 50%;
}
</style>
