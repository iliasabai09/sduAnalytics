<template>
  <section class="_container">
    <USectionTitle title="Expert Team" sub-title="TEAM MEMBER"/>
    <div class="teamUsers">
      <TeamMemberCard v-for="user in users" :user="user"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import USectionTitle from "@/ui/USectionTitle.vue";
import TeamMemberCard from "@/components/TeamMemberCard.vue";
import { ref } from "vue";

const users = ref([
  {
    img: "https://cutesolution.com/html/techvio/assets/img/team/team-1.jpg",
    username: "Ava Farrington",
    profession: "Founder, CEO"
  }, {
    img: "https://cutesolution.com/html/techvio/assets/img/team/team-2.jpg",
    username: "Kevin Haley",
    profession: "Co-Founder, CTO"
  }, {
    img: "https://cutesolution.com/html/techvio/assets/img/team/team-3.jpg",
    username: "Alishia Fulton",
    profession: "Chief Creative Officer"
  }, {
    img: "https://cutesolution.com/html/techvio/assets/img/team/team-4.jpg",
    username: "Lucas Martinez",
    profession: "Creative Director"
  }
]);

</script>

<style scoped lang="scss">
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
