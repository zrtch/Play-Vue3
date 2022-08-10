/*
 * @Descripttion: 
 * @Date: 2022-08-10 10:41:55
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;