<template>
    <el-menu
        :default-active="activeIndex"
        class="navbar"
        mode="horizontal"
        @select="handleSelect"
    >
        <img src="src/assets/logo.png" id="icon">
        <el-menu-item index="1" id="acceuilPage"><router-link to="/">Acceuil</router-link></el-menu-item>
        <el-menu-item index="2" id="collectionPage">Collection</el-menu-item>
        <el-menu-item index="3" id="loginPage"><router-link to="/login">Connexion</router-link></el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
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

