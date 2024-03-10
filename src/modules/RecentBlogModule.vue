<template>
  <section>
    <div class="_container">
      <USectionTitle title="Recent Blog" sub-title="BLOG & ARTICLE"/>
      <div class="blogs">
        <BlogCard
            v-for="blog in blogs"
            :title="blog.title"
            :description="blog.description"
            :img="blog.img"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import USectionTitle from '@/ui/USectionTitle.vue'
import BlogCard from '@/components/BlogCard.vue'
import { ref } from 'vue'

const blogs = ref([
  {
    img: 'https://cutesolution.com/html/techvio/assets/img/blog/blog-1.jpg',
    title: 'Planning for a Safe Return to the Workplace IT Solutions',
    description: 'Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua'
  }, {
    img: 'https://cutesolution.com/html/techvio/assets/img/blog/blog-2.jpg',
    title: 'Announcing Our New Smiles for Success Charity',
    description: 'Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua'
  }, {
    img: 'https://cutesolution.com/html/techvio/assets/img/blog/blog-3.jpg',
    title: 'Machine Learning Applications for Every Industry',
    description: 'Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua'
  }
])

</script>

<style scoped lang="scss">
section {
  background-color: var(--greyBg);
  padding: 80px 0;
  @media (max-width: 768px) {
    padding: 40px 0;
  }
}

.blogs {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;

  .blog {
    width: 31.3333333%;
    @media (max-width: 992px) {
      width: 48%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
