import { createApp } from 'vue'
import App from './06_vuex中在setup使用封装的useGetters/App.vue'
import store from './06_vuex中在setup使用封装的useGetters/store'

createApp(App).use(store).mount('#app')
