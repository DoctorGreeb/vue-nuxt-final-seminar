<template>
    <div class="article-wrapper">
        <div class="article ">
            <nav class="article-title ">
                <p class="slogan">Pro.Beyond.</p>
                <p class="brand">Iphone 14 Pro</p>
                <p class="descript italic18">Created to change everything for the better. For everyone</p>
                <button class="italic16">Shop Now</button>
            </nav>
            <nav class="article-content">
                <img src="/Iphone-Image.png" alt="iphone-image">
            </nav>

        </div>
    </div>
</template>


<script setup lang="ts">

</script>


<style scoped>
 .article-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .article {
    background-color: rgba(33, 28, 36, 1);
    width: 1440px;
    height: 632px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    overflow: hidden;

 }

 .article p, .article button{
     font-family: "Abel", sans-serif;
     margin: 0.3rem;
 }

 .article-title .slogan{
    font-size: 2rem;
    font-family:Georgia, 'Times New Roman', Times, serif;
    color: rgba(144, 144, 144, 1);
 }

 .article-title .brand{
    font-size: 6rem;
 }

 .article-title .descript{
    margin-bottom: 1rem;
    color: rgba(144, 144, 144, 1);
    letter-spacing: 0.11rem;
 }

 .article-content img {
    height: auto;
    width: 106%;
 }


 .article-title {
    color: rgba(255, 255, 255, 1);
 }

 .article-title button {
    background-color: rgba(0, 0, 0, 1);
    color: white;
    border: 1px solid rgba(144, 144, 144, 1);
    padding: 0.75rem 4rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: 0.1rem;
}
</style>