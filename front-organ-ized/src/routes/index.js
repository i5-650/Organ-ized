import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Account from "../pages/Account.vue";
import Register from '../pages/Register.vue';
import Collection from '../pages/Collection.vue';

const routes = [
    {path:'/',name: 'Home', component: Home},
    {path:'/login',name: 'Login',component: Login},
    {path:'/account',name: 'Account',component: Account},
    {path:'/register', name:'Register', component: Register},
	{path: '/collection', name: 'Collection', component: Collection}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
