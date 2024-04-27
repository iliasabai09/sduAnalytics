<template>
  <div class="onlineUsers boxShadow">
    <div class="onlineUsers-title titleLarge secondaryText">Online Users ( {{ '5' }} )</div>
    <div class="onlineUsers-list">
      <div class="onlineUsers-person" v-for="user in onlineUsers">
        <img :src="user.avatar"
             alt="" width="40" height="40">
        <div class="onlineUsers-name text">{{ user.username }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const onlineUsers = ref([
  {
    id: 1,
    username: 'Kakoi to chel',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Rp9UXsjJFoO7oS1c_mg5_brhQ6cBShVJAA&s'
  }, {
    id: 1,
    username: 'Kakoi to chel',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Rp9UXsjJFoO7oS1c_mg5_brhQ6cBShVJAA&s'
  }, {
    id: 1,
    username: 'Kakoi to chel',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Rp9UXsjJFoO7oS1c_mg5_brhQ6cBShVJAA&s'
  }, {
    id: 1,
    username: 'Kakoi to chel',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Rp9UXsjJFoO7oS1c_mg5_brhQ6cBShVJAA&s'
  }, {
    id: 1,
    username: 'Kakoi to chel',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Rp9UXsjJFoO7oS1c_mg5_brhQ6cBShVJAA&s'
  }

])
</script>

<style scoped lang="scss">
.onlineUsers {
  flex: 2;
  min-height: 200px;
  border-radius: 16px;
  background-color: #fff;
  padding: 16px;

  &-title {
    text-align: center;
    margin-bottom: 12px;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &-person {
    display: flex;
    align-items: center;
    gap: 12px;

    img {
      border-radius: 50%;
    }
  }

  &-avatar {

  }
}
</style>
