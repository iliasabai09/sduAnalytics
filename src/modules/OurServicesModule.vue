<template>
  <section class="_container">
    <USectionTitle title="Our Services" sub-title="What We Provide"/>
    <div class="servicesGroup">
      <ServiceBlock
          v-for="service in services"
          :key="service"
          :title="service.title"
          :description="service.description"
          :img="service.image"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import USectionTitle from '@/ui/USectionTitle.vue';
import ServiceBlock from '@/components/ServiceBlock.vue';
import { ref } from 'vue';

const services = ref([
  {
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
    image: 'app-development'
  },
  {
    title: 'Digital Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
    image: 'targeted'
  },
  {
    title: 'Startup Solutions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
    image: 'analysis'
  },
  {
    title: 'Networking Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
    image: 'super-intelligence'
  },
  {
    title: 'SEO Optimization',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
    image: 'app-development'
  },
  {
    title: 'Apps Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
    image: 'ui-design'
  }
]);
</script>

<style scoped>
section {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #fff;
}

.servicesGroup {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 24px;
}
</style>
