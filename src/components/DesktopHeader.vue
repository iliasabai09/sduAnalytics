<template>
  <header>
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

// todo сделать анимацию
document.body.addEventListener('scroll', (e) => {
  console.log(e)
})

</script>

<style scoped lang="scss">
header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  .content {
    display: flex;
    justify-content: space-between;
    min-height: 80px;
    align-items: center;
  }
}
</style>
