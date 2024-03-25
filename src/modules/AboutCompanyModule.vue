<template>
  <section class="content" id="about">
    <div class="_container contentBlocks">
      <AboutCompanyContent/>
      <UAboutCompanyImg/>
    </div>
  </section>
</template>

<script setup lang="ts">
import AboutCompanyContent from '@/components/AboutCompanyContent.vue';
import UAboutCompanyImg from '@/ui/UAboutCompanyImg.vue';
</script>

<style scoped lang="scss">
.content {
  background-color: #F7F8F8;
  padding: 100px 0;
}

.contentBlocks {
  display: flex;
  justify-content: space-between;
  gap: 24px;

  img {
    width: 50%;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
}
</style>
