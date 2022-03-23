import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path:'/',name: 'Home', component: Home},
    {path:'/login',name: 'Login',component: Login}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})