import { createApp } from 'vue'
import App from './04_vuex中在setup使用封装的useState函数/App.vue'
import store from './04_vuex中在setup使用封装的useState函数/store'

createApp(App).use(store).mount('#app')
