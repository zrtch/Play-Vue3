/*
 * @Descripttion: 
 * @Date: 2022-08-10 10:41:55
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Rate from '../pages/rate.vue'
import Transition from '../pages/transition.vue'

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
    },
    {
        path: "/rate",
        name: "rate",
        component: Rate
    },
    {
        path: "/transition",
        name: "transition",
        component: Transition
    },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;