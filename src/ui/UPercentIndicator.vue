<template>
  <div>
    <div class="label">
      <b>{{ title }}</b>
      <b>{{ percent }}%</b>
    </div>
    <div class="indicator">
      <div class="indicator-percentage"
           :style="{ width: animatedPercent + '%'}"
           v-intersectionObserver="animate"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const animatedPercent = ref(0)


const props: any = defineProps({
  title: {
    type: String,
    required: true
  },
  percent: {
    type: String,
    required: true
  }
})

function animate(el: any) {
  if (el) animatedPercent.value = props.percent
}
</script>

<style scoped lang="scss">
.label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.indicator {
  height: 7px;
  width: 100%;
  border-radius: 4px;
  background-color: var(--primary-light);
  position: relative;
}

.indicator-percentage {
  background-color: var(--primary);
  height: 100%;
  border-radius: 4px;
  transition: 1.3s ease;
}
</style>
