<template>
    <div class="common-layout">
            <el-header style="height:auto">
                <div class="pictureEmbed">
                    <img src="src/assets/background.png">
                    <h1 id="titre"> Collectionneur d'organes humain</h1>
                </div>
            </el-header>
    </div>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'

const openAside= ref(false)

const open = () => {
  ElMessageBox.alert('This is a message', 'Title', {
    confirmButtonText: 'Proposer un prix',
  })
}

const setOpenAside = () => {
    openAside.value = !openAside.value;
} 

</script>

<style>

    .checkboxCategory{
        margin : 2%;
    }

        
    .slider-demo-block {
    display: flex;
    align-items: center;
    }
    .slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
    }


    body{
        overflow-x: hidden;
    }

    *{
        margin: 0;
    }
    .pictureEmbed{
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    .pictureEmbed img{
        width: 100%;
        height: 43.75vw;
    }

    .pictureEmbed h1{
        position: absolute;
        top: 24vw;
        bottom: auto;
        font-size: 4vw;
    }
    .image {
        width: 100%;
        display: block;
    }


</style>
