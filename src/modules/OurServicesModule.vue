<template>
  <section class="_container" id="services">
    <USectionTitle title="Услуги" sub-title="Что мы предоставляем"/>
    <div class="servicesGroup">
<!--      <ServiceBlock-->
<!--          v-for="service in services.services"-->
<!--          :title="service.title"-->
<!--          :description="service.description"-->
<!--          :img="service.image"-->
<!--      />-->
    </div>
  </section>
</template>

<script setup lang="ts">
import USectionTitle from '@/ui/USectionTitle.vue';
import ServiceBlock from '@/components/ServiceBlock.vue';
import { ref } from 'vue';
// import * as services from "../db/services.json"
</script>

<style scoped lang="scss">
section {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #fff;
}

.servicesGroup {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 24px;
  @media (max-width: 992px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
}
</style>
