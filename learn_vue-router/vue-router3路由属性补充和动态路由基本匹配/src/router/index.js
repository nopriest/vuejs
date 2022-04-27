//通过import导入组件是同步的
//import About from '../pages/About.vue'
//import Home from '../pages/Home.vue'


import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

//对应映射关系
// const routes = [
// {
//     path: '/',
//     redirect: '/home'
// },
// {
//     path: '/about',
//     component: About
// },
// {
//     path: '/home',
//     component: Home
// }
// ]

//默认方式是不会进行js分包的
//第三方库默认打包到/dist/js/chunk-vendors.xxxxx.js
//自己的代码默认打包到/dist/js/app.xxxxx.js
//通过路由进行懒加载 用到的时候再进行加载 多个js
//路由对象

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/about',

        //component可以是一个函数 但是必须返回一个promise
        //另外可以使用魔法注释配置分包的名字 magic comment
        component: () => {
            return import(/* webpackChunkName: "about-chunk" */'../pages/About.vue')
        },

        //配置名字
        name: 'about-cpn',
        meta: {
            name: 'hsu',
            age: 18,
            height: 1.88
        }
    },
    {
        path: '/home',
        
        //箭头函数缩写
        component: () => import(/* webpackChunkName: "home-chunk" */'../pages/Home.vue')
    },
    //path /user/hsu/id/1 是动态匹配的
    {
        path: '/user/:username/id/:id',
        component: () => import('../pages/User.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router