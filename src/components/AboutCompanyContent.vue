<template>
  <div class="wrapper">
    <div class="subtitle">About Our Company</div>
    <h3>Providing Your Business With A Quality IT Service is Our Passion</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua enim ad minim</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.subtitle {
  color: var(--secondary);
  font-size: 16px;
  font-weight: 700;
}

p {
  font-size: 16px;
  line-height: 1.8;
  color: #5f5f5f;
}

h3 {
  color: #404040;
  font-size: 32px;
  font-weight: bold;
}
</style>
