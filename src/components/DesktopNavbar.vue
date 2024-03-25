<template>
  <nav>
    <UNavbarLink v-for="link in links" :link="link.link" :title="link.title" :color="color"/>
  </nav>
</template>

<script setup lang="ts">
import UNavbarLink from '@/ui/UNavbarLink.vue'
import { onMounted, ref } from 'vue'
import { scrollToSection } from '@/utils/functions/scrollToSection'

defineProps({
  color: {
    type: String,
    default: '#fff'
  }
})

const links = ref([
  {
    title: 'Главная',
    link: '/'
  }, {
    title: 'О нас',
    link: 'about'
  }, {
    title: 'Сервисы ',
    link: 'services'
  }, {
    title: 'Портфолио',
    link: 'portfolio'
  }, {
    title: 'Страницы',
    link: 'pages'
  }, {
    title: 'Блог',
    link: 'blog'
  }, {
    title: 'Контакты',
    link: 'contact'
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
