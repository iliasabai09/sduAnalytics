<template>
  <div class="footer-area">
    <div class="single-footer-widget">
      <ULogo class="footerLogo"/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        consectetur laboris.
      </p>
      <div class="socials">
      <USocialItem v-for="social in socials" :social="social"/>
    </div>
    </div>
    <div class="single-footer-widget">
      <div class="footer-heading">
        <h3>Our Services</h3>
      </div>
      <ul class="footer-quick-links">
        <li><a href="#">Startup Solutions</a></li>
        <li><a href="#">Web Development</a></li>
        <li><a href="#">Networking Services</a></li>
        <li><a href="#">SEO Optimization</a></li>
        <li><a href="#">Apps Development</a></li>
      </ul>
    </div>
    <div class="single-footer-widget">
      <div class="footer-heading">
        <h3>Useful Links</h3>
      </div>
      <ul class="footer-quick-links">
        <li><a href="about.html">About Us</a></li>
        <li><a href="portfolio.html">Case Study</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="privacy-policy.html">Privacy Policy</a></li>
        <li><a href="terms-condition.html">Terms &amp; Conditions</a></li>
      </ul>
    </div>
    <div class="single-footer-widget">
      <div class="footer-heading">
        <h3>Contact Info</h3>
      </div>
      <div class="footer-info-contact">
        <img src="../../public/icons/phone-call.png" alt="">
        <div class="footer-info-contact-content">
            <h3>Phone</h3>
            <span><a href="tel:12345678">080 707 555-321</a></span>
        </div>
      </div>
      <div class="footer-info-contact">
        <img src="../../public/icons/envelope.png" alt="">
        <div class="footer-info-contact-content">
            <h3>Email</h3>
            <span><a href="mailto:demo@example.com">demo@example.com</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ULogo from '@/ui/ULogo.vue';
import USocialItem from '@/ui/USocialItem.vue';
import { ref } from 'vue';

const socials = ref([
  {
    href: '',
    icon: 'facebook'
  },
  {
    href: '',
    icon: 'twitter'
  },
  {
    href: '',
    icon: 'instagram'
  },
  {
    href: '',
    icon: 'youtube'
  }

]);
</script>

<style scoped lang="scss">
.footer-area {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 50px;
    color: #fff;
}

.single-footer-widget .footer-quick-links li {
    padding-bottom: 18px;
    list-style-type: none;
}

.footer-info-contact-content {
    margin-left: 10px;
}

.single-footer-widget .footer-heading {
    margin-bottom: 25px;
}

.single-footer-widget .footer-info-contact h3 {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 10px 0;
}

.single-footer-widget .footer-info-contact span a {
    color: #ececec;
    font-size: 16px;
    font-weight: 400;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.footer-info-contact {
    display: flex;
    margin-bottom: 16px;

    img {
        width: 20px;
        height: 20px;
    }
}

.footer-heading h3 {
    position: relative;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(255, 255, 255, 0.2);
    margin: 0;
}

@media (min-width: 992px) {
    .single-footer-widget:nth-child(1) {
        flex: 0 0 auto;
        width: 33.33333333%;

        p {
            margin-bottom: 25px;
        }
    }

    .single-footer-widget:nth-child(4) {
        flex: 0 0 auto;
        width: 33.33333333%;
    }
}

.socials {
    display: flex;
    align-items: center;
    gap: 12px;
}

.single-footer-widget {
    flex-direction: column;

    a {
        color: #ececec;
    }
}

.footerLogo {
    margin-bottom: 25px;
}
</style>
