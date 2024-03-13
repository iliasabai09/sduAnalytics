<template>
  <div class="burger" @click="toggleBurger" :class="{ openedBurger: opened }">
    <div class="line line-1" :style="{ background: color }"></div>
    <div class="line line-2" :style="{ background: color }"></div>
    <div class="line line-3" :style="{ background: color }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  color: {
    type: String,
    default: '#fff',
    required: false
  }
})

const opened = ref(false)

function toggleBurger() {
  opened.value = !opened.value
  emits('toggle', opened.value)
}

const emits = defineEmits(['toggle'])
</script>

<style scoped lang="scss">
.openedBurger {
  .line-1 {
    transform-origin: left top;
    transform: rotate(45deg);
  }

  .line-2 {
    visibility: hidden;
    transition: none !important;
  }

  .line-3 {
    transform-origin: left bottom;
    transform: rotate(-45deg);
  }
}

.burger {
  display: flex;
  flex-direction: column;
  gap: 6px;

  .line {
    height: 4px;
    width: 30px;
    transition: .3s ease;
  }
}
</style>
