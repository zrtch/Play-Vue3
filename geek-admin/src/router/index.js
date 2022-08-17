/*
 * @Descripttion: 
 * @Date: 2022-08-10 10:41:55
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Rate from '../pages/rate.vue'
import Transition from '../pages/transition.vue'
import Login from '../pages/Login.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/login",
        name: "login",
        component: Login,
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

router.beforeEach((to, from, next) => {
    // let token = localStorage.getItem('token');
    // if (!token) {
    //     next('/login');
    // }
    // NProgress.start()
    next()
    return true
})

// router.afterEach(() => {
//     NProgress.done()
// })

export default router;