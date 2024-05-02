<template>
  <div class="info">
    <UUserBanner/>
    <div class="info-specs">
      <UserInfoData/>
      <div class="info-results">
        <TogetherTime/>
<!--        <OnlineUsers/>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import UUserBanner from '@/ui/UUserBanner.vue'
import UserInfoData from '@/components/UserInfoData.vue'
import OnlineUsers from '@/components/OnlineUsers.vue'
import TogetherTime from '@/components/TogetherTime.vue'</script>

<style scoped lang="scss">
.info {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &-specs {
    display: flex;
    width: 100%;
    gap: 16px;
    align-items: flex-start;
  }

  &-results {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 2;
  }
}
</style>
