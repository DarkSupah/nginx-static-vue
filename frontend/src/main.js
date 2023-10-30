import { createApp } from 'vue'
import App from './App.vue'
import { SamplePlugin } from '@/plugins/script.js'

const app = createApp(App)

app.use(SamplePlugin)

app.mount('#app')
