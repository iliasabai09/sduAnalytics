<template>
  <div class="stars">
    <IconStar v-for="_ in stars" :key="_"/>
  </div>
</template>

<script setup lang="ts">
import IconStar from "@/components/icons/IconStar.vue";

defineProps({
  stars: {
    type: Number,
    default: 0,
    required: false
  }
});
</script>

<style scoped>
.stars {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
