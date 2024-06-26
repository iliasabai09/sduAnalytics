<template>
  <div class="wrapper boxShadow">
    <div class="user">
      <img
          :src="user?.img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAk2mEYjpQiYnlDto4Ewvl0IKxiozmlLc2BBwvnY6wg&s'"
          alt="img"
          height="100"
          @click="$refs.fileInput.click()" style="cursor: pointer;border-radius: 50%"
      >
      <input type="file" ref="fileInput" style="display: none;" @change="handleFileChange">
      <div class="user-info">
        <div class="titleMedium">{{ user.name }} {{ user.surname }}</div>
        <div class="user-link textLarge">{{ user.email }}</div>
      </div>
    </div>
    <div class="menu">
      <div
          :style="{ color: idx === menu.length - 1 ? 'red' : '#000'}"
          class="menu-link textMedium"
          v-for="(link,idx) in menu"
          @click="toContent(link.route)"
          :class="{ 'menu-link-active': link.isActive }"
      >
        <span class="material-symbols-outlined" :style="{ color: idx === menu.length - 1 ? 'red' : '#000'}">{{
            link.icon
          }}</span>
        <div>{{ link.title }}</div>
        <div class="_spacer"></div>
        <span class="material-symbols-outlined" :style="{ color: idx === menu.length - 1 ? 'red' : '#000'}">chevron_right</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { AuthService } from '@/shared/services/auth.service'
import { UserService } from '@/shared/services/user.service'

const router = useRouter()
const route = useRoute()
const user = ref(UserService.getUser());
const menu = ref([
  {
    id: 1,
    title: 'info',
    isActive: true,
    route: '/profile/info',
    icon: 'feed'
  },
  {
    id: 2,
    title: 'teachers',
    isActive: false,
    route: '/profile/teachers',
    icon: 'for_you'
  },
  {
    id: 4,
    title: 'grades',
    isActive: false,
    route: '/profile/grades',
    icon: 'grade'
  },
  {
    id: 5,
    title: 'courses',
    isActive: false,
    route: '/profile/courses',
    icon: 'school'
  },
  {
    id: 6,
    title: 'logout',
    isActive: false,
    route: '/auth',
    icon: 'logout'
  }

])

function toContent(r: string) {
  if (r === '/auth') {
    AuthService.logout()
    UserService.logout()
  }
  router.push(r)
}

function handleFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      AuthService.updateImg(e.target.result)
      UserService.updateImg(e.target.result)
      user.value.img = e.target.result;
    }
    reader.readAsDataURL(file)
  }
}

watch(() => route.fullPath, (value, oldValue, onCleanup) => {
  menu.value = menu.value.map(menu => {
    menu.isActive = menu.route === value
    return menu
  })
})
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 320px;
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  box-sizing: border-box;
  height: fit-content;
  top: 102px;
  position: sticky;
}

.user {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  &-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &-link {
    color: #006dba;
  }
}

.menu {
  display: flex;
  flex-direction: column;

  &-link {
    padding: 16px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;

    &-active {
      background-color: var(--primary-light);
    }

    span {
      color: var(--primary);
    }
  }
}
</style>
