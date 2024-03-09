<template>
    <div class="subscribe-area">
      <div class="subscribe-content">
        <h2>Sign Up Our Newsletter</h2>
        <p>We Offer An Informative Monthly Technology Newsletter - Check It Out.</p>
      </div>
      <form class="newsletter-form">
        <input type="email" class="input-newsletter" name="email" placeholder="Enter Your Email" required="true" autocomplete="off">
        <button type="submit">Subscribe Now</button>
      </form>
		</div>
</template>
  
<script setup lang="ts">
</script>
  
<style scoped lang="scss">
  .subscribe-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 25px;
    line-height: 1.5;
    border-bottom: 1px solid rgb(255, 255, 255, 0.2);
  }

  .subscribe-content {
    flex: 0 0 auto;
    width: 50%;
    color: #ffffff;

    h2 {
      color: #fff;
      font-size: 24px;
      font-weight: 700;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 15px;
    }
  }

  .newsletter-form {
    display: flex;
    flex-direction: row;
    max-width: 650px;
    flex: 0 0 auto;
    width: 50%;
  
    .input-newsletter {
    color: #404040;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    height: 50px;
    display: block;
    padding-left: 25px;
    border-radius: 5px 0px 0px 5px;
    background-color: #ffffff;
    border: none;
    outline: 0;
    }
  }

  .newsletter-form button {
    height: 50px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    padding: 0 30px;
    border-radius: 0px 5px 5px 0px;
    text-transform: capitalize;
    background-color: #7b68ee;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border: none;
  }
</style>
  