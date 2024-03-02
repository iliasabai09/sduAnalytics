<template>
  <section>
    <div class="_container">
      <div class="sectionContent">
        <HomeSectionContent/>
        <UHomeSectionImg/>
      </div>
    </div>
    <UHomeBottomShape/>
  </section>
</template>

<script setup lang="ts">
import HomeSectionContent from '@/components/HomeSectionContent.vue';
import UHomeSectionImg from '@/ui/UHomeSectionImg.vue';
import UHomeBottomShape from '@/ui/UHomeBottomShape.vue';</script>

<style scoped lang="scss">
section {
  background: linear-gradient(to bottom, #370b6f, #00429b, #006dba, #0095ce, #2dbcdc, #fff);
  padding-top: 160px;
  box-sizing: border-box;

  .sectionContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 992px) {
      flex-direction: column;
      gap: 32px;
    }
  }
}
</style>
