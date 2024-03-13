<template>
  <div class="menu" :class="{ opened }">
    <div class="menu-item" v-for="(link, idx) in links">
      <UNavbarLink class="menu-link" :title="link.title" :color="'#000'" :link="link.link"/>
      <div class="line" v-if="idx !== links.length - 1"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UNavbarLink from '@/ui/UNavbarLink.vue'

defineProps({
  opened: {
    type: Boolean,
    required: false,
    default: false
  }
})

const links = ref([
  {
    title: 'Home',
    link: '/'
  }, {
    title: 'About Us',
    link: '/'
  }, {
    title: 'Services ',
    link: '/'
  }, {
    title: 'Portfolio ',
    link: '/'
  }, {
    title: 'Pages',
    link: '/'
  }, {
    title: 'Blog',
    link: '/'
  }, {
    title: 'Contact',
    link: '/'
  }
])
</script>

<style scoped lang="scss">
.menu {
  background: #fff;
  overflow: hidden;
  position: fixed;
  left: 16px;
  right: 16px;
  transition: .3s ease;
  opacity: 0;
  top: 90px;
  border-radius: 16px;

  &-link {
    min-height: 46px;
    display: flex;
    align-items: center;
    padding: 0 16px;
  }
}

.opened {
  transition: .3s ease;
  opacity: 1;
  z-index: 1;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
}

.line {
  background: #DBEEFD;
  width: 100%;
  height: 1px;
}
</style>
