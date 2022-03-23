<template>
    <div class="pictureEmbed">
        <img src="src/assets/background.png">
        <h1 id="titre"> Collectionneur d'organes humain</h1>
    </div>
</template>

<script>

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


</style>