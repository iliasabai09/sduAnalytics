<template>
  <div class="card">
    <UStars :stars="feedback.stars"/>
    <p class="_moduleDescription">{{ feedback.text }}</p>
    <div class="cardUser">
      <img src="https://cutesolution.com/html/techvio/assets/img/client/testimonial-2.jpg" alt="img">
      <div class="username">{{ feedback.username }}</div>
      <div class="userCountry">{{ feedback.country }}</div>
    </div>
  </div>
</template>

<script setup>
import UStars from "@/ui/UStars.vue";

defineProps({
  feedback: {
    type: Object,
    required: true
  }
});
</script>

<style scoped lang="scss">
.card {
  background-color: var(--greyBg); //card #fafafa
  padding: 32px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 8px;
}

p {
  font-size: 16px;
}

img {
  border-radius: 50%;
}

.cardUser {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
}

.username {
  color: #333;
  font-size: 20px;
  font-weight: 700;
}

.userCountry {
  color: #7b68ee;
  font-size: 16px;
  font-weight: 500;
  display: block;
}
</style>
