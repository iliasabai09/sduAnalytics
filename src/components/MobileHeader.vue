<template>
  <header ref="header" :class="{ headerAnimation: isAnimated }">
    <div class="_container content" :class="{ noVisible: !isAnimated }">
      <UBlackLogo/>
      <UBurgerButton :color="'#000'" @toggle="toggleMenu"/>
    </div>
    <div class="_container content" v-if="!isAnimated">
      <ULogo height="32"/>
      <UBurgerButton :color="'#fff'" @toggle="toggleMenu"/>
    </div>
  </header>
  <MobileMenu :opened="openedMenu" @toggle="toggleMenu($event)"/>
</template>

<script setup lang="ts">
import UBlackLogo from '@/ui/UBlackLogo.vue'
import { ref } from 'vue'
import ULogo from '@/ui/ULogo.vue'
import UBurgerButton from '@/ui/UBurgerButton.vue'
import MobileMenu from '@/components/MobileMenu.vue'

const header = ref(null)
const isAnimated = ref(false)
const openedMenu = ref(false)

document.addEventListener('scroll', (e) => {
  const scrolledPixels = window.scrollY || window.pageYOffset
  toggleMenu(false)
  isAnimated.value = scrolledPixels > 300
})

function toggleMenu(val: boolean) {
  openedMenu.value = val
}
</script>

<style scoped lang="scss">
header {
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  z-index: 100;

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
