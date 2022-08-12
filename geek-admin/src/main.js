/*
 * @Descripttion: 
 * @Date: 2022-08-10 10:25:28
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

const app = createApp(App)

app.use(store)
    .use(router)
    .mount('#app')
