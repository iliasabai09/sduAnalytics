import './assets/styles/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { intersectionObserverDirective } from '@/utils/directives/intersectionObserverDirective'

const app = createApp(App)
app.directive('intersectionObserver', intersectionObserverDirective)
app.use(router)
app.mount('#app')
