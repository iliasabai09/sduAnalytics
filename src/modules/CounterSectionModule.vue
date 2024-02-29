<template>
    <section>
      <div class="countersGroup">
      <CounterBlock
          v-for="counter in counterBlocks"
          :number="counter.number"
          :description="counter.description"
      />
    </div>
    </section>
</template>
  
<script setup lang="ts">
  import { ref } from 'vue';
  import CounterBlock from '@/components/CounterBlock.vue'
  
  const counterBlocks = ref([
    {
      number: '23+',
      description: 'Years Helping Business'
    },
    {
      number: '250+',
      description: 'Working Employees'
    },
    {
      number: '4500+',
      description: 'Complete Projects'
    },
    {
      number: '3000+',
      description: 'Happy Customers'
    }
  ])
  </script>
  
  <style scoped>
  section {
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #fff;
    position: relative;
    z-index: 1;
    text-align: center;
    background: url(../../public/images/banner-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  section::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: #1f1f54;
  }
  
  .countersGroup {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 32px;
  }
  </style>
  