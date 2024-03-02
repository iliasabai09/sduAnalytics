<template>
  <div class="block" v-intersectionObserver="animate" :class="{ animateServiceBlock: animateBlock }">
    <img :src="'/images/' + img + '.svg'" alt="img" width="50" height="50">
    <h3>{{ title }}</h3>
    <p class="_moduleDescription">{{ description }}</p>
    <UReadMoreBtn/>
  </div>
</template>

<script setup lang="ts">
import UReadMoreBtn from '@/ui/UReadMoreBtn.vue'
import { ref } from 'vue'

const animateBlock = ref(false)
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String
  }
});

function animate(val: any) {
  if (val)
    animateBlock.value = true
}
</script>

<style scoped lang="scss">
.block {
  width: 100%;
  height: 330px;
  transition: all 500ms ease-out;
  box-shadow: 5px 7px 15px 2px rgba(82, 90, 101, 0.12);
  padding: 35px 30px;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  top: 100px;
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;

  &:hover {
    transition: all 500ms ease-out;
    top: -16px;
  }
}

.animateServiceBlock {
  transition: .6s;
  top: 0;
  opacity: 1;
}

img {
  margin-bottom: 16px;
}
</style>
