<template>
  <div class="loginForm">
    <div class="loginForm-form">
      <div class="container" id="container">
        <div class="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <!--        <div class="social-icons">-->
            <!--          <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>-->
            <!--          <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>-->
            <!--          <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>-->
            <!--          <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>-->
            <!--        </div>-->
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Surname">
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <button>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <!--        <div class="social-icons">-->
            <!--          <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>-->
            <!--          <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>-->
            <!--          <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>-->
            <!--          <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>-->
            <!--        </div>-->
            <span>or use your email password</span>
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div class="toggle-container">
          <div class="toggle">
            <div class="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p style="color: #fff">Enter your personal details to use all of site features</p>
              <button class="hidden" id="login">Sign In</button>
            </div>
            <div class="toggle-panel toggle-right">
              <h1>Hello, Student!</h1>
              <p style="color: #fff;padding-left: 8px">Register with your personal details to use all of site features</p>
              <button class="hidden" id="register">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const container = document.getElementById('container')
  const registerBtn = document.getElementById('register')
  const loginBtn = document.getElementById('login')

  registerBtn.addEventListener('click', () => {
    container.classList.add('active')
  })

  loginBtn.addEventListener('click', () => {
    container.classList.remove('active')
  })
})
</script>

<style scoped lang="scss">
//@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
.loginForm {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-size: cover;
  background-image: url("https://nurlysaulet.kz/assets/images/projects/SDU/04-min.jpg");

  &-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.container p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px 0;
}

.container span {
  font-size: 12px;
}

.container a {
  color: #333;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0 10px;
}

.container button {
  background-color: #512da8;
  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
}

.container button.hidden {
  background-color: transparent;
  border-color: #fff;
}

.container form {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
}

.container input {
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.active .sign-in {
  transform: translateX(100%);
}

.sign-up {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.active .sign-up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: move 0.6s;
}

@keyframes move {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}

.social-icons {
  margin: 20px 0;
}

.social-icons a {
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
}

.toggle-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;
}

.container.active .toggle-container {
  transform: translateX(-100%);
  border-radius: 0 150px 100px 0;
}

.toggle {
  background-color: #512da8;
  height: 100%;
  background: linear-gradient(to right, #5c6bc0, #512da8);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.container.active .toggle {
  transform: translateX(50%);
}

.toggle-panel {
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.toggle-left {
  transform: translateX(-200%);
}

.container.active .toggle-left {
  transform: translateX(0);
}

.toggle-right {
  right: 0;
  transform: translateX(0);
}

.container.active .toggle-right {
  transform: translateX(200%);
}
</style>