<template>
  <div class="card">
    <img :src="user.img" alt="img">
    <div class="username">{{ user.username }}</div>
    <div class="userProfessional">{{ user.profession }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  user: {
    type: Object,
    required: true
  }
});
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 320px;

  img {
    width: 100%;
  }
}

.username {
  color: #333;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}

.userProfessional {
  color: #7b68ee;
  font-size: 16px;
  font-weight: 500;
  display: block;
  text-align: center;
}
</style>
