<template>
    <div class="block">
      <h2 v-intersectionObserver="handleCounter">{{ count }}+</h2>
      <h3>{{ description }}</h3>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue'

  const props: unknown = defineProps({
    number: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  })


  const count = ref(0)
  const handleCounter = (val) => {
    if(!val) return;
    setInterval(() => {
      if (count.value < Number(props.number))
        count.value++
    }, 1)
  }
  </script>

<style scoped lang="scss">
.block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #fff;
    font-size: 45px;
    font-weight: 700;
    margin-bottom: 5px;
    word-spacing: -5px;
  }

  h3 {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }

}
  </style>
