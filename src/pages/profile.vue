<template>
  <div class="profilePage">
    <div class="_container">
      <div class="layout">
        <ProfileUserModule/>
        <div class="profilePage-content">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileUserModule from '@/modules/ProfileUserModule.vue'</script>

<style scoped lang="scss">
.profilePage {
  min-height: 100vh;
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
