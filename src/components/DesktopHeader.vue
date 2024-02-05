<template>
  <header>
    <div class="_container content">
      <UDesktopLogo/>
      <div class="links">
        <ULink link="cases">Кейсы</ULink>
        <ULink link="answers">Вопрос-ответ</ULink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

import UDesktopLogo from '@/ui/UDesktopLogo.vue'
import ULink from '@/ui/ULink.vue'</script>

<style scoped lang="scss">
header {
  height: 64px;
  width: 100%;
  position: fixed;
  top: 0 !important;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: hsla(0, 0%, 100%, .8);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .25);
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  transition: .2s;
}

.content {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 64px;
}

.links {
  display: flex;
  align-items: center;
  gap: 24px;
}
</style>
