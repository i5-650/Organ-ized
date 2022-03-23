<template>
    <div class="common-layout">
        <el-container>
            <el-header style="height:auto">
                <div class="pictureEmbed">
                    <img src="src/assets/background.png">
                    <h1 id="titre"> Collectionneur d'organes humain</h1>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <div id="Categorie">
                        <h2>Catégorie</h2>
                        <input type="checkbox" id="cerveau" value="Cerveau" v-model="checkedCategories" />
                        <label for="cerveau">Cerveau</label>
                        <br/>
                        <input type="checkbox" id="coeur" value="Coeur" v-model="checkedCategories" />
                        <label for="coeur">Coeur</label>
                    </div>
                    <div id="Prix">
                        <h2>Prix</h2>
                        </div>
                </el-aside>
                <el-main>
                    <p>Checked categories: <pre>{{ checkedCategories }}</pre></p>
                    <el-row>
                        <el-col v-for="(o, index) in 25"
                            :key="o"
                            :span="8"
                            :offset="index > 0 ? 25 : 0"
                        >
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="src/assets/hearth.png" class="image"/>
                                <div style="padding: 14%">
                                    <el-row>
                                        <el-col :span="19"><span>nom</span></el-col>
                                        <el-col :span="5"><span>prix</span></el-col>
                                    </el-row>
                                    <div class="bottom">
                                        <el-row>
                                            <el-col :span="19"><span class="grid-content bg-purple-dark">Etat</span></el-col>
                                            <el-col :span="5"><el-button type="text" class="button">Voir plus ➔ </el-button></el-col>
                                        </el-row>
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

<script>
export default {
  data() {
    return {
      checkedCategories: ['Cerveau', 'Coeur'],
    }
  }
}

</script>

<style>
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