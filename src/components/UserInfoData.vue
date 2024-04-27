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
import { ref } from 'vue'

const userInfo = ref([
  {
    type: 'ID',
    value: '38725361275',
    icon: 'person_2'
  },
  {
    type: 'Name',
    value: 'Aizere',
    icon: 'badge'
  },
  {
    type: 'Surname',
    value: 'Abzelbekova',
    icon: 'person'
  },
  {
    type: 'Email',
    value: 'brdene@sdu.kz',
    icon: 'mail'
  },
  {
    type: 'Adviser',
    value: 'Brdene Brdenesovich',
    icon: 'person'
  },
  {
    type: 'Course',
    value: '4',
    icon: 'school'
  },
  {
    type: 'Birthday',
    value: '2002y 1 april',
    icon: 'cake'
  },
  {
    type: 'Gender',
    value: 'Male',
    icon: 'agender'
  },
  {
    type: 'Group',
    value: '42BT19',
    icon: 'group'
  }
])
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
