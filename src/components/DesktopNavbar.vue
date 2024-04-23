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
    title: 'About us',
    link: 'about'
  },
  {
    title: 'Talk with AC',
    link: 'services'
  }, {
    title: 'OurStory',
    link: 'ourStory'
  }, {
    title: 'OurTeam',
    link: 'OurTeam'
  },
  {
    title: 'HowItWorks',
    link: 'howItWorks'
  },
])
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  gap: 22px;
}
</style>
