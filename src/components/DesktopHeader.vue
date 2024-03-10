<template>
  <header ref="header" :class="{ headerAnimation: isAnimated }">
    <div class="_container content" :class="{ noVisible: !isAnimated }">
      <UBlackLogo/>
      <DesktopNavbar color="#000"/>
      <UButton :title="'Get It Support'"/>
    </div>
    <div class="_container content" v-if="!isAnimated">
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
import UBlackLogo from '@/ui/UBlackLogo.vue'

const header = ref(null)
const isAnimated = ref(false)

document.addEventListener('scroll', (e) => {
  const scrolledPixels = window.scrollY || window.pageYOffset
  isAnimated.value = scrolledPixels > 300
})


</script>

<style scoped lang="scss">
header {
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  z-index: 100;
  @media (max-width: 768px) {
    display: none;
  }

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
  top: 0;
}

.noVisible {
  visibility: hidden;
}
</style>
