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
  background-color: #ffdd40;
  height: 100px;
  width: 100%;
  color: #274dff;
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
