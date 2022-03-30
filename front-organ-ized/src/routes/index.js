import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Account from "../pages/Account.vue";
import Register from '../pages/Register.vue';

const routes = [
    {path:'/',name: 'Home', component: Home},
    {path:'/login',name: 'Login',component: Login},
    {path:'/account',name: 'Account',component: Account},
    {path:'/register', name:'Register', component: Register}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
