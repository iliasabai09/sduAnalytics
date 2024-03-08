<template>
  <nav>
    <UNavbarLink v-for="link in links" :link="link.link" :title="link.title" :color="color"/>
  </nav>
</template>

<script setup lang="ts">
import UNavbarLink from '@/ui/UNavbarLink.vue'
import { ref } from 'vue'

defineProps({
  color: {
    type: String,
    default: '#fff'
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

<style scoped>
nav {
  display: flex;
  align-items: center;
  gap: 22px;
}
</style>
