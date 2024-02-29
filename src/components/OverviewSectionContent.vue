<template>
    <div class="content">
        <h6 class="title">Why Choose Us?</h6>
        <h2 class="heading">
            Safeguard Your Brand with Cyber Security and IT Solutions
        </h2>
        <div class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div class="features">
            <UOverviewItem v-for="item in items" :text="item.text"/>
        </div>
  </div>
</template>
  
<script setup lang="ts">
    import UOverviewItem from '@/ui/UOverviewItem.vue'
    import { ref } from 'vue';

    const items = ref([
        {
            text: 'Remote IT Assistance'
        },
        {
            text: 'Cloud Services'
        },
        {
            text: 'Managed IT Service '
        }, 
        {
            text: 'IT Security Services '
        }, 
        {
            text: 'Practice IT Management'
        }, 
        {
            text: 'Solving IT Problems'
        }
    ])
</script>
  
<style scoped>
  .content {
    max-width: 565px;
    display: flex;
    flex-direction: column;
  }

  .title {
    color: var(--secondary);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  
  .heading {
    color: var(--titlePrimary);
    font-size: 38px;
    margin: 8px 0 15px 0;
  }
  
  .description {
    color: var(--descriptionSecondary);
    font-size: 16px;
    font-weight: 400;
    font-family: 'Catamaran', sans-serif;
    margin-bottom: 15px;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 16px;
  }
</style>
  