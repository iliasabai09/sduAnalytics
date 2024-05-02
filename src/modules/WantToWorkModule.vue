<template>
  <section>
    <div class="content">
      <div class="_secondaryTitle">Develop your performance with us.</div>
      <h3 class="title">Analyze your performance</h3>
      <div class="description">Feel free to reach out to us if you have any questions or need further assistance. We are always ready to help and address all your inquiries. Contact us using the provided contact information, and our team will ensure you receive all the necessary support. Your satisfaction is our priority!</div>
      <div class="actions">
        <UButton :title="'Позвоните сейчас'"/>
        <UButton :title="'Свяжитесь с нами'"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UButton from '@/ui/UButton.vue'</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  padding: 60px 16px;
  position: relative;
  z-index: 1;
  background: url(../../public/images/banner-bg.jpg) fixed;
  text-align: center;

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
