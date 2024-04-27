import './assets/styles/main.scss'
import router from './router'
import { intersectionObserverDirective } from '@/utils/directives/intersectionObserverDirective'
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives,
})

createApp(App).directive('intersectionObserver', intersectionObserverDirective).use(router).use(vuetify).mount('#app')
