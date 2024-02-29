<template>
  <section class="content">
    <div class="_container contentBlocks">
      <AboutCompanyContent/>
      <UAboutCompanyImg/>
    </div>
  </section>
</template>

<script setup lang="ts">
import AboutCompanyContent from '@/components/AboutCompanyContent.vue'
import UAboutCompanyImg from '@/ui/UAboutCompanyImg.vue'
</script>

<style scoped>
.content {
  background-color: #F7F8F8;
  padding: 100px 0;
}

.contentBlocks {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}
</style>
