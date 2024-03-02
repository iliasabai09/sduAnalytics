<template>
  <section>
    <div class="_container">
      <USectionTitle title="Client Feedback" sub-title="OUR TESTIMONIAL"/>
      <div class="feedbackGroup">
        <ClientFeedbackCard :feedback="feedback" v-for="feedback in feedbacks" :key="feedback"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import USectionTitle from '@/ui/USectionTitle.vue';
import ClientFeedbackCard from '@/components/ClientFeedbackCard.vue';
import { ref } from 'vue';

const feedbacks = ref([
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
    img: '',
    stars: 5,
    username: 'Zahra Burnett',
    country: 'Turkey'
  }, {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
    img: '',
    stars: 5,
    username: 'Zahra Burnett',
    country: 'Turkey'
  }, {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
    img: '',
    stars: 5,
    username: 'Zahra Burnett',
    country: 'Turkey'
  }

]);
</script>

<style scoped lang="scss">
section {
  padding: 80px 0;
  background-color: #fff !important;
  @media (max-width: 768px) {
    padding: 40px 0;
  }
}

.feedbackGroup {
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 16px;
  gap: 16px;
  @media (max-width: 992px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
}
</style>
