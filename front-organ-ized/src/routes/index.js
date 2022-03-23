import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Account from "../pages/Account.vue";

const routes = [
    {path:'/',name: 'Home', component: Home},
    {path:'/login',name: 'Login',component: Login},
    {path:'/account',name: 'Account',component: Account}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})