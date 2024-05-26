<template>
  <div class="infoData boxShadow">
    <div class="infoData-header titleLarge secondaryText">User info</div>
    <div class="infoData-list">
      <div class="infoData-field" v-for="val in userInfo">
        <span class="material-symbols-outlined">{{ val.icon }}</span>
        <div class="textLarge">{{ val.type }}:</div>
        <div class="text greyText">{{ val.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { UserService } from '@/shared/services/user.service'

const userInfo = ref([
  {
    type: 'identify',
    value: '38725361275',
    icon: 'person_2',
    key: 'createdAt'
  },
  {
    type: 'Name',
    value: 'Aizere',
    icon: 'badge',
    key: 'name'
  },
  {
    type: 'Surname',
    value: 'Abzelbekova',
    icon: 'person',
    key: 'surname'
  },
  {
    type: 'Email',
    value: 'brdene@sdu.kz',
    icon: 'mail',
    key: 'email'
  },
  {
    type: 'Adviser',
    value: 'Brdene Brdenesovich',
    icon: 'person',
    key: 'adviser'
  },
  {
    type: 'Course',
    value: '4',
    icon: 'school',
    key: 'course'
  },
  {
    type: 'Birthday',
    value: '2002y 1 april',
    icon: 'cake',
    key: 'birthday'
  },
  // {
  //   type: 'Gender',
  //   value: 'Male',
  //   icon: 'agender'
  // },
  {
    type: 'Semester',
    value: '42BT19',
    icon: 'group',
    key: 'semester'
  }
])

onMounted(() => {
  const user = UserService.getUser()
  for (const key in userInfo.value) {
    const keyUp = userInfo.value[key].key
    userInfo.value[key].value = user[keyUp]
  }
})
</script>

<style scoped lang="scss">
span {
  color: var(--primary);
  font-size: 30px;
  margin-right: 8px;
}

.infoData {
  flex: 3;
  background-color: #fff;
  border-radius: 16px;
  min-height: 300px;

  &-header {
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  &-list {
    display: flex;
    flex-direction: column;
    padding: 0 16px 16px;
    gap: 16px;
  }

  &-field {
    display: flex;
    gap: 4px;
    align-items: center;
  }
}
</style>
