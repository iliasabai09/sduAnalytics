<template>
  <div class="item">{{ text }}</div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.item {
  margin-top: 15px;
  color: var(--titlePrimary);
  font-size: 16px;
  font-weight: 600;
  padding: 13px 15px;
  border-radius: 5px;
  border-left: 2px solid var(--primary);
  background-color: #ffffff;
  -webkit-box-shadow: -1px 3px 20px 0px rgb(82, 90, 101, 0.1);
  box-shadow: -1px 3px 20px 0px rgb(82, 90, 101, 0.1);
  -webkit-transition: 0.4s;
  
  
  /* 
  Todo: Добавить анимацию
  background: linear-gradient(to right, black 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .5s ease-out; */
}
</style>
  