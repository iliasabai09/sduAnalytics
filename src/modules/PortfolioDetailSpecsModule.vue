<template>
  <div class="specs">
    <div class="specs-spec">
      <h4>Author</h4>
      <p>Jessica Smith</p>
    </div>
    <div class="specs-spec">
      <h4>Category</h4>
      <p>Virtual, Technology</p>
    </div>
    <div class="specs-spec">
      <h4>Date</h4>
      <p>June 20, 2024</p>
    </div>
    <div class="specs-spec">
      <h4>Share</h4>
      <div class="socials">
        <USocialItem v-for="social in socials" :social="social" :hover-type="'hoverToWhite'"/>
      </div>
    </div>
    <div class="specs-spec">
      <h4>Works Preview</h4>
      <UButton :title="'Live preview'"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import USocialItem from '@/ui/USocialItem.vue'
import { ref } from 'vue'
import UButton from '@/ui/UButton.vue'

const socials = ref([
  {
    href: '',
    icon: 'facebook'
  },
  {
    href: '',
    icon: 'twitter'
  },
  {
    href: '',
    icon: 'instagram'
  },
  {
    href: '',
    icon: 'youtube'
  }
])
</script>

<style scoped lang="scss">
.specs {
  display: flex;
  justify-content: space-between;

  &-spec {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}

.socials {
  display: flex;
  gap: 8px;
}
</style>
