<template>
    <el-menu
        :default-active="activeIndex"
        class="navbar"
        mode="horizontal"
        @select="handleSelect"
    >
        <router-link to="/"><img src="src/assets/hearth.png" id="icon"></router-link>
        <el-menu-item index="1" id="acceuilPage"><router-link to="/">Acceuil</router-link></el-menu-item>
        <el-menu-item index="2" id="collectionPage"><router-link to="/test">Collection</router-link></el-menu-item>
        <el-menu-item index="3" id="loginPage"><router-link :to="url">{{label}}</router-link></el-menu-item>
    </el-menu>
</template>

<script lang="ts">
import { ref } from 'vue'
import {Check, Delete, Edit, Message, Search, Star} from "@element-plus/icons-vue";

export default {
    data:()=>({
        url: "/login",
        label:"Connexion"
    }),
    methods:{
        loginCheck(){
            if(localStorage.getItem("token")){
                this.url="/account";
                this.label="Espace Perso";
            }else{
                this.url="/login";
                this.label="Connexion";
            }
        }
    },
    computed:{
        urlGet(){
            return this.$route.path;
        }
    },
    watch: {
        urlGet() {
            this.loginCheck();
        }
    }
}
</script>

<style>
.navbar{
    display: flex;
}

a{
    text-decoration: none;
}

#loginPage{
    position: absolute;
    right: 0;
}
#icon{
    width: 60px;
}
</style>

