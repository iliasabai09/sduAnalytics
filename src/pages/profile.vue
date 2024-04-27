<template>
  <div class="profilePage">
    <div class="_container">
      <div class="layout">
        <ProfileUserModule/>
        <div class="profilePage-content">
          <RouterView/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileUserModule from '@/modules/ProfileUserModule.vue'</script>

<style scoped lang="scss">
.profilePage {
  height: 100vh;
  width: 100vw;
  background-color: var(--greyBg);

  &-content {
    flex: 1;
  }
}

.layout {
  display: flex;
  padding-top: 100px;
  gap: 16px;
}

</style>
