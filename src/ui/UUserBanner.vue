<template>
  <div class="banner">
    <div class="banner-text">{{ 'Welcome ' + user?.name }}</div>
  </div>
</template>

<script setup lang="ts">
import { UserService } from '@/shared/services/user.service'

const user = UserService.getUser()
</script>

<style scoped lang="scss">
.banner {
  background: linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,142,142,1) 100%);
  height: 100px;
  width: 100%;
  color: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;

  &-text {
    font-family: "freight-big-pro", cursive;
    margin: auto;
    letter-spacing: 0.0015em;
    font-size: 2em;
    text-align: center;
    font-weight: bold;
  }
}
</style>
