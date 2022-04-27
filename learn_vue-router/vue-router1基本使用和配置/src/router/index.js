import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

//对应映射关系
const routes = [
{
    path: '/',
    redirect: '/home'
},
{
    path: '/about',
    component: About
},
{
    path: '/home',
    component: Home
}

]

//路由对象
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router