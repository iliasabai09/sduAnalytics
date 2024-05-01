<template>
  <div class="_desktop">
    <DesktopHeader/>
  </div>
  <div class="_mobile">
    <MobileHeader/>
  </div>
</template>

<script lang="ts" setup>
import DesktopHeader from '@/components/DesktopHeader.vue'
import MobileHeader from '@/components/MobileHeader.vue'
import { onMounted } from 'vue'
import { scrollToSection } from '@/utils/functions/scrollToSection'

onMounted(() => {
  if (document.location.href.includes('auth') || document.location.href.includes('profile')) return
  let hash = document.location.href.split('#')[1]
  setTimeout(() => {
    scrollToSection(hash)
  }, 100)
})
</script>

<style scoped>

</style>
