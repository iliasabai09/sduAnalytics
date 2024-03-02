<template>
  <div class="block" v-intersectionObserver="animate" :class="{ animateServiceBlock: animateBlock }">
    <img :src="'/public/images/' + img + '.svg'" alt="img" width="50" height="50">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <UReadMoreBtn/>
  </div>
</template>

<script setup lang="ts">
import UReadMoreBtn from '@/ui/UReadMoreBtn.vue';
import { ref } from 'vue';

const animateBlock = ref(false);
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
    type: String,
  }
});

function animate(val) {
  if (val)
    animateBlock.value = true;
}
</script>

<style scoped lang="scss">
.block {
  max-width: 416px;
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

  &:hover {
    transition: all 500ms ease-out;
    top: -16px;
  }

  img {
    margin-bottom: 32px;
  }

  h3 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.8;
    color: #5f5f5f;
  }
}

.animateServiceBlock {
  transition: .6s;
  top: 0;
  opacity: 1;
}
</style>
