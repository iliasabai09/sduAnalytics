<template>
  <header :class="{ headerAnimation: isAnimated }">
    <div class="_container content">
      <ULogo/>
      <DesktopNavbar/>
      <UButton :title="'Get It Support'"/>
    </div>
  </header>
</template>

<script setup lang="ts">
import ULogo from '@/ui/ULogo.vue'
import DesktopNavbar from '@/components/DesktopNavbar.vue'
import UButton from '@/ui/UButton.vue'
import { ref } from 'vue'

const isAnimated = ref(false)

</script>

<style scoped lang="scss">
header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: .6s ease;

  .content {
    display: flex;
    justify-content: space-between;
    min-height: 80px;
    align-items: center;
  }
}

.headerAnimation {
  transition: .6s ease;
  background-color: #ffffff !important;
  position: fixed !important;
}

.blockToAnimate {
  height: 300px;
  width: 1px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
