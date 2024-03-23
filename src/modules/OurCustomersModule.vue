<template>
    <section>
      <div class="_container">
        <USectionTitle title="Trusted By Over 1500" sub-title="Our Customers"/>
        <div class="customers">
          <CustomerCard
              v-for="customer in customers"
              :img="customer.img"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import USectionTitle from '@/ui/USectionTitle.vue'
  import CustomerCard from '@/components/CustomerCard.vue'
  import { ref } from 'vue'
  
  const customers = ref([
    {
      img: '/images/alser.png'
    }, {
      img: '/images/alser.png'
    }, {
      img: '/images/alser.png'
    }
  ])
  
  </script>
  
  <style scoped lang="scss">
  section {
    background-color: var(--greyBg);
    padding: 80px 0;
    @media (max-width: 768px) {
      padding: 40px 0;
    }
  }
  
  .customers {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
  
    .customer_item {
      width: 31.3333333%;
      @media (max-width: 992px) {
        width: 48%;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
  </style>
  