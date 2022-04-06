<template>
    <el-container>
            <el-header style="height:auto">
                <div class="pictureEmbed">
                    <img src="src/assets/img_squelette..jpg">
                    <h1 id="titre">Bienvenue dans la collection d'organes de Hanibal Lecter</h1>
                </div>
            </el-header>
    </el-container>
        
        <div>
            <article>
                <el-row>         
                    <el-col :span="10">
                        <div class="article_h_lecter">
                                <div class="contenu_article">
                                    <h1>Qui suis-je ?</h1>
                                    <h2>Vrai nom</h2>
                                    <p>Hannibal Lecter VIII</p>
                                    <h2>Origine</h2>
                                    <p>Dragon Rouge</p>
                                    <h2>Professions</h2>
                                    <p>- Psychiatre (anciennement)</p>
                                    <p>- Tueur en série.</p>
                                    <p>- Fugitif.</p>
                                    <h2>Pouvoirs / Capacités</h2>
                                    <p>Intelligence supérieure</p>
                                    <p>Maître psychologue et manipulateur</p>
                                    <p>Raisonnement analytique (à la fois inductif et déductif)</p>
                                    <p>Palais de l'esprit immense</p>
                                    <p>Maître escapologue</p>
                                    <p>Expertise culinaire</p>
                                    <p>Charisme extrême</p>
                                    <p>Immense richesse</p>
                                </div>
                        </div> 
                    </el-col>

                    <el-col :span="2">
                        <div class="image_h_lecter">
                            <img src="src/assets/h_lecter.jpg" /> 
                        </div> 
                    </el-col>
                </el-row>

                <div class="article_h_lecter">
                    <div class="contenu_article">
                        <h2>Passe-temps</h2>
                        <p>Dévorer la chair de ses victimes.</p>
                        <p>Utiliser la psychanalyse sur ses patients et ses ennemis.</p>
                        <p>Cuisiner.</p>
                        <p>Lire.</p>
                        <p>S'intéresser et prendre plaisir à l'art.</p>
                        <p>Jouer à des jeux d'esprit.</p>
                        <p>Collectionner des organes humains</p>
                        <h2>Objectifs</h2>
                        <p>Tuez Vladis Grutas et vengez la mort de sa sœur (réussi).</p>
                        <p>Se venger de Will Graham (a échoué).</p>
                        <p>Tourmenter Clarice Starling et l'hypnotiser pour qu'elle devienne sa soeur (partiellement réussie, puis abandonné).</p>
                        <p>Éviter et échapper aux autorités.</p>
                        <p>Assassiner et consommer la chair d'autres personnes.</p>
                        <h2>Crimes</h2>
                        <p>Homicides en série</p>
                        <p>Entrée par effraction</p>
                        <p>Cannibalisme</p>
                        <p>Vol d'identité</p>
                        <p>Suicide forcé</p>
                        <p>Violence psychologique</p>
                        <p>Mutilation</p>
                        <p>Évasion de prison</p>
                        <p>Torture</p>
                        <h2>Type de méchant</h2>
                        <p>Tueur en série cannibal.</p>
                    </div>
                </div>
            </article>

        </div>

</template>





<script>
</script>



<style>
    .image_h_lecter{    
        margin: 4em;
    }

    .article_h_lecter {  
        margin: 2em;
        padding: 2em;
        background-color: rgba(0, 0, 0, 0.623);
        color : white;
        border-radius: 25% 10%;
        border: 2px yellow;
    }

    .contenu_article p{
        padding: 10px;
        color : white;
    }

    .contenu_article h2, h1{
        text-align: center;
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
        text-align: center;
        top: 24vw;
        bottom: auto;
        color : #ecd7bc;
        font-size: 4vw;
        background-color: #1a0e0e85;
        
    }
    .image {
        width: 100%;
        display: block;
    }
</style>
