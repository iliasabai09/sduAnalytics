<template>
  <div class="content">
    <div class="socials">
      <USocialItem v-for="social in socials" :key="social" :social="social"/>
    </div>
    <h1 class="heading">
      IT Solutions &
      Business Services
      Company
    </h1>
    <div class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua,
      magna aliqua. ipsum is simply dummy text of the printing.
    </div>
  </div>
</template>

<script setup lang="ts">
import USocialItem from '@/ui/USocialItem.vue';
import { ref } from 'vue';

const socials = ref([
  {
    href: '',
    icon: 'facebook'
  },
  {
    href: '',
    icon: 'twitter'
  },
  {
    href: '',
    icon: 'instagram'
  },
  {
    href: '',
    icon: 'youtube'
  }

]);

</script>

<style scoped>
.content {
  max-width: 565px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.socials {
  display: flex;
  align-items: center;
  gap: 12px;
}

.heading {
  font-weight: bold;
  font-size: 64px;
  color: #fff;
  line-height: 78px;
}

.description {
  color: #fff;
  line-height: 26px;
}
</style>
