<template>
  <div class="content">
    <div class="socials">
      <USocialItem v-for="social in socials" :social="social"/>
    </div>
    <h1 class="heading">
      Academic Compass
    </h1>
    <div class="description">
      We offer an innovative approach to assessing students and enhancing their productivity. Our website predicts
      students' successes, helps identify their strengths and weaknesses, and provides personalized
      recommendations for achieving outstanding results.
    </div>
    <div class="actions">
      <UButton :title="'About us'"/>
      <UButton :title="'Talk with AC'"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import USocialItem from '@/ui/USocialItem.vue';
import { ref } from 'vue';
import UButton from '@/ui/UButton.vue';

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

<style scoped lang="scss">
.content {
  max-width: 565px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 768px) {
    gap: 16px;
  }
}

.socials {
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 992px) {
    margin: 0 auto;
  }
}

.heading {
  font-weight: bold;
  font-size: 64px;
  color: #fff;
  line-height: 78px;

  @media (max-width: 992px) {
    text-align: center;
    font-size: 48px;
    line-height: 56px;
  }

  @media (max-width: 768px) {
    line-height: 42px;
    font-size: 32px;
  }
}

.actions {
  display: flex;
  gap: 24px;
  @media (max-width: 992px) {
    justify-content: center;
  }
}

.description {
  color: #fff;
  line-height: 26px;
  @media (max-width: 992px) {
    text-align: center;
  }
}
</style>
