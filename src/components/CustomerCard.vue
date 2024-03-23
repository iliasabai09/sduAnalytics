<template>
    <div class="customer_item">
      <img :src="img" alt="img">
    </div>
</template>
  
<script setup lang="ts">
  defineProps({
    img: {
      type: String,
      required: true
    }
  })
</script>
  
<style scoped lang="scss">
  img {
    width: 100%;
    border-radius: 8px;
  }
  
  .customer_item {
    -ms-flex: 0 0 20%;
    -webkit-box-flex: 0;
    flex: 0 0 20%;
    max-width: 20%;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
  