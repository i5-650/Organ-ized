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
            </article>

        </div>

</template>





<script>
</script>



<style>
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
