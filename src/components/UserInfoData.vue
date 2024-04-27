<template>
  <div class="infoData boxShadow">
    <div class="infoData-header titleLarge">User info</div>
    <div class="infoData-list">
      <div class="infoData-field">
        <span class="material-symbols-outlined">badge</span>
        <div class="textLarge">Name:</div>
        <div class="text greyText">Aizere</div>
      </div>
      <div class="infoData-field">
        <span class="material-symbols-outlined">person</span>
        <div class="textLarge">Surname:</div>
        <div class="text greyText">Abzelbekova</div>
      </div>
      <div class="infoData-field">
        <span class="material-symbols-outlined">person</span>
        <div class="textLarge">Age:</div>
        <div class="text greyText">18</div>
      </div>
      <div class="infoData-field">
        <span class="material-symbols-outlined">school</span>
        <div class="textLarge">Course:</div>
        <div class="text greyText">4</div>
      </div>
      <div class="infoData-field">
        <span class="material-symbols-outlined">cake</span>
        <div class="textLarge">Birthday:</div>
        <div class="text greyText">2002y 1 april</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
