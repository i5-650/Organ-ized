import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Collection from '../pages/Collection.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path:'/',name: 'Home', component: Home},
    {path:'/login',name: 'Login',component: Login},
    {path:'/collection', name : 'Collection', component: Collection}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})