<template>
  <template v-if="isHaveAnimatePage">
    <header ref="header" :class="{ headerAnimation: isAnimated }">
      <div class="_container content" :class="{ noVisible: !isAnimated }">
        <RouterLink to="/">
          <UBlackLogo/>
        </RouterLink>
        <DesktopNavbar color="#000"/>
        <RouterLink to="/profile">
          <UButton :title="'Мой кабинет'"/>
        </RouterLink>
      </div>
      <div class="_container content" v-if="!isAnimated">
        <RouterLink to="/">
          <ULogo/>
        </RouterLink>
        <DesktopNavbar/>
        <RouterLink to="/profile/info">
          <UButton :title="'Мой кабинет'"/>
        </RouterLink>
      </div>
    </header>
  </template>

  <template v-if="!isHaveAnimatePage">
    <header ref="header" :class="{ headerAnimation: !isAnimated }" class="headerWithoutAnimate">
      <div class="_container content" :class="{ noVisible: isAnimated}">
        <RouterLink to="/">
          <UBlackLogo/>
        </RouterLink>
        <DesktopNavbar color="#000"/>
        <RouterLink to="/profile/info">
          <UButton :title="'Мой кабинет'"/>
        </RouterLink>
      </div>
    </header>
  </template>
</template>

<script setup lang="ts">
import ULogo from '@/ui/ULogo.vue'
import DesktopNavbar from '@/components/DesktopNavbar.vue'
import UButton from '@/ui/UButton.vue'
import { computed, onMounted, ref, watch } from 'vue'
import UBlackLogo from '@/ui/UBlackLogo.vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const header = ref(null)
const isAnimated = ref(false)

document.addEventListener('scroll', (e) => {
  const scrolledPixels = window.scrollY || window.pageYOffset
  isAnimated.value = scrolledPixels > 300
})

const isHaveAnimatePage = computed(() => {
  return !['profile', 'profile-info', 'profile-teachers', 'profile-plan', 'profile-grades', 'profile-courses'].includes((router.currentRoute as any).value.name)
})

watch(
    () => router,
    (val) => {
      console.log(val)
    }
)

onMounted(() => {
  // console.log(route)
  console.log(router.currentRoute)
})
</script>

<style scoped lang="scss">
header {
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  z-index: 100;
  @media (max-width: 768px) {
    display: none;
  }

  .content {
    display: flex;
    justify-content: space-between;
    min-height: 80px;
    align-items: center;
  }
}

.headerAnimation {
  transition: .6s ease;
  background-color: #F7F8F8 !important;
  position: fixed !important;
  top: 0;
}

.noVisible {
  visibility: hidden;
}

.headerWithoutAnimate {
  -webkit-box-shadow: 0px 0px 12px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 12px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 12px -7px rgba(0, 0, 0, 0.75);
}
</style>
