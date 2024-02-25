<template>
  <section>
    <div class="_container">
      <div class="sectionContent">
        <HomeSectionContent/>
        <UHomeSectionImg/>
      </div>
    </div>
  </section>
</template>

<script>
import HomeSectionContent from "@/components/HomeSectionContent.vue";
import UHomeSectionImg from "@/ui/UHomeSectionImg.vue";

export default {
  name: "HomeSectionModule",
  components: {UHomeSectionImg, HomeSectionContent}
}
</script>

<style scoped lang="scss">
section {
  min-height: 1020px;
  background: linear-gradient(to bottom, #370b6f, #00429b, #006dba, #0095ce, #2dbcdc);
  padding-top: 160px;
  box-sizing: border-box;

  .sectionContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
