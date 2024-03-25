<template>
  <section>
    <div class="_container">
      <USectionTitle title="Наша команда" sub-title="Члены команды"/>
      <div class="teamUsers">
        <TeamMemberCard v-for="user in members.members" :user="user"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import USectionTitle from '@/ui/USectionTitle.vue'
import TeamMemberCard from '@/components/TeamMemberCard.vue'
import * as members from "../db/members.json"

</script>

<style scoped lang="scss">
section {
  padding: 80px 0;
  @media (max-width: 768px) {
    padding: 40px 0;
  }
}

.teamUsers {
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-top: 16px;
  gap: 32px;
  justify-content: center;
  @media (max-width: 992px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 560px) {
    grid-template-columns: auto;
  }
}
</style>
