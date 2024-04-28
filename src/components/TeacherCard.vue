<template>
  <div class="teacher boxShadow">
    <div class="teacher-img">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfq6R5pVJ7m9mpFCUsuyeHMAzCZe5-JmS1XppinhIT9A&s"
           alt="teacher">
    </div>
    <div class="teacher-subject bodyMedium">{{ 'Algebra' }}</div>
    <div class="teacher-title textLarge">{{ 'Brbale Brablesovich' }}</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.teacher {
  border-radius: 16px;
  padding: 16px;
  min-width: 220px;
  text-align: center;
  cursor: pointer;
  background-color: #fff;

  &-img {
    margin-bottom: 8px;

    img {
      border-radius: 8px;
      width: 80%;
    }
  }

  &-title {
    color: var(--primary);
  }

  &-subject {
    margin-bottom: 4px;
    color: var(--grey);
  }
}
</style>
