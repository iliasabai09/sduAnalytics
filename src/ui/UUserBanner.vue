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
  background-color: #151c53;
  height: 100px;
  width: 100%;
  color: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  background-image: url('https://yt3.googleusercontent.com/82UnWmIFlgRnWam4R5tqS3qv-MaawpGx0QFLSYM5mrABFO1_XyFF7GRJLxToIU-gD9i4K_fc_w=s900-c-k-c0x00ffffff-no-rj');
  background-size: 100px;

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
