<template>
    <div class="common-layout">
        <el-container>
            <el-container>
                <el-aside v-if="openAside" width="20%">
                    <div id="Categorie">
                        <br/>
                        <h2>Catégorie</h2>

                        <br/>
                        <div>
                            <el-checkbox-group v-model="checkboxSelectionCategories" size="large" text-color="#TODO" fill="#TODO">
                                <el-checkbox class="checkboxCategory" label="Vesicule biliaire" border />
                                <el-checkbox class="checkboxCategory" label="Cerveau" round border/>
                                <el-checkbox class="checkboxCategory" label="Poumon" round border/>
                                <el-checkbox class="checkboxCategory" label="Foie" round border/>
                                <el-checkbox class="checkboxCategory" label="Gros Intestin" round border/>
                                <el-checkbox class="checkboxCategory" label="Apendicite" round border/>
                                <el-checkbox class="checkboxCategory" label="Vessie" round border/>
                                <el-checkbox class="checkboxCategory" label="Muscle" round border/>
                                <el-checkbox class="checkboxCategory" label="Rein" round border/>
                                <el-checkbox class="checkboxCategory" label="Ratte" round border/>
                                <el-checkbox class="checkboxCategory" label="Coeur" round border/>
                            </el-checkbox-group>
                        </div>
                        
                    </div>
                    <br/>
                    <h2>Prix (en milliers d'€) </h2>
                    <br/>
                    <div class="slider-demo-block">
                        <el-slider v-model="prix" range show-stops :max="100" />
                    </div>

                </el-aside>
                <el-main>
                    <el-button @click="setOpenAside " >Filtres</el-button>
                    <!--<p>Checked categories: <pre>{{ checkedCategories }}</pre></p>-->
                    <el-row>
                        <el-col @click="open" v-for="(o, index) in 25"
                            :key="o"
                            :span="8"
                            :offset="index > 0 ? 25 : 0"
                        >
                            <el-card :body-style="{ padding: '0px' }" style="margin:25px">
                                <img src="src/assets/hearth.png" class="image"/>
                                <div style="padding: 14%">
                                    <el-row>
                                        <el-col :span="19"><span>Nom</span></el-col>
                                        <el-col :span="5"><span>Prix</span></el-col>
                                    </el-row>
                                    <div class="bottom">
                                        <el-row>
                                            <el-col :span="19"><span class="grid-content bg-purple-dark">Etat</span></el-col>
                                            <el-col :span="5"><el-button type="text" class="button">Voir plus ➔ </el-button></el-col>
                                        </el-row>
                                        <el-row>Catégorie</el-row>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'
import { ref } from 'vue'

const openAside= ref(false)

const open = () => {
  ElMessageBox.prompt('Description de l\'organe, de son état et de son prix', 'Nom de l\'organe', {
    confirmButtonText: 'Ok',
  })
}

const setOpenAside = () => {
    openAside.value = !openAside.value;
} 

const checkboxSelectionCategories = ref(['Vesicule biliaire','Cerveau','Poumon','Foie','Gros Intestin','Apendicite','Vessie','Muscle','Rein','Ratte','Coeur'])
const prix = ref([0, 100])
const organ = ref








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
