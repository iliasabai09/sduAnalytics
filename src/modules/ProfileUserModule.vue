<template>
  <div class="wrapper boxShadow">
    <div class="user">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjz73Qfzp2C1E_75YyUAGxMEltKpxd5b29GqiWxdzO3A&s"
           alt="img" width="100" height="100">
      <div class="user-info">
        <div class="titleMedium">{{ 'Brbale Brbale' }}</div>
        <div class="user-link textLarge">{{ 'test@sdu.com' }}</div>
      </div>
    </div>
    <div class="menu">
      <div class="menu-link textMedium" v-for="link in menu">{{ link.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menu = ref([
  {
    id: 1,
    title: 'info',
    isActive: true
  }, {
    id: 2,
    title: 'teachers',
    isActive: true
  }, {
    id: 3,
    title: 'plan',
    isActive: true
  }, {
    id: 4,
    title: 'activity',
    isActive: true
  }, {
    id: 5,
    title: 'baga',
    isActive: true
  }
])
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 320px;
  background-color: #fff;

  border-radius: 16px;
  padding: 16px;
  box-sizing: border-box;
}

.user {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  &-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &-link {
    color: #006dba;
  }
}

.menu {
  display: flex;
  flex-direction: column;

  &-link {
    padding: 16px;
    border-radius: 16px;

    &:first-child {
      background-color: var(--secondary-light);
    }
  }
}
</style>
