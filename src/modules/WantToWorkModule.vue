<template>
  <section>
    <div class="_secondaryTitle">WANT TO WORK WITH US?</div>
    <h3 class="title">Digitally Transform & Grow Your Business</h3>
    <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur voluptatem accusantium
      doloremque adipiscing elit.
    </div>
    <div class="actions">
      <UButton :title="'Call Now'"/>
      <UButton :title="'Contact Us'"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import UButton from '@/ui/UButton.vue'</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  position: relative;
  z-index: 1;
  background: url(../../public/images/banner-bg.jpg) fixed;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: #1f1f54;
  }
}

.title {
  color: #fff;
  font-size: 32px;
  font-weight: bold;
}

.description {
  color: #fff;
  font-size: 18px;
  max-width: 750px;
  text-align: center;
  line-height: 32px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 24px;
}
</style>
