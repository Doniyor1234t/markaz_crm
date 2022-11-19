import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'

import VueCookies from 'vue-cookies'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import store from './store'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(ElementPlus)
for(const [key, component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}

app.use(store).use(VueCookies,{expire:'7d'}).use(Maska).use(router).mount('#app')
