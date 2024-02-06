<template>
  <div class="first">
    <div class="_container">
      <div class="content">
        <div class="heading">
          <h1>
            <span>Помогаем </span>
            <span>бизнесу</span>
            <br>
            <span>найти </span>
            <span>клиентов</span>
          </h1>
        </div>
        <div class="text">Знаем, как убедить вашу целевую аудиторию <b>оставить заявку у вас</b>, а не у конкурентов.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.first {
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 950px;
  max-width: 100vw;
  overflow: hidden;
  background-image: url("/public/images/bgBanner.webp");
  background-repeat: no-repeat;
  background-size: 140vh;
  background-position: bottom 0 right -200px;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    z-index: 100;
    background: linear-gradient(0deg, #fff 0, transparent);
  }
}

.heading {
  font-size: 40px;
  margin-bottom: 32px;
}

.content {
  margin-top: 230px;
}

.text {
  font-size: 20px;
  max-width: 500px;
  line-height: 32px;
}
</style>
