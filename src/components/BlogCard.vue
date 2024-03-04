<template>
  <div class="blog">
    <img :src="img" alt="img">
    <div class="blogContent _spacer">
      <div class="blogSpecs">
        <div class="blogSpec">
          <div>Author</div>
        </div>
        <div class="blogSpec">
          <div>17 June 2024</div>
        </div>
      </div>
      <div class="blogTitle">{{ title }}</div>
      <div class="blogDescription">{{ description }}</div>
      <div class="_spacer"></div>
      <UReadMoreBtn/>
    </div>
  </div>
</template>

<script setup lang="ts">
import UReadMoreBtn from '@/ui/UReadMoreBtn.vue'

defineProps({
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
img {
  width: 100%;
  border-radius: 8px;
}

.blog {
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0px 5px 20px 0px rgb(82, 90, 101, 0.1);
  display: flex;
  flex-direction: column;
}

.blogContent {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}

.blogSpecs {
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 15px;
}

.blogTitle {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4;
}

.blogDescription {
  color: #6a6c72;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
}
</style>
