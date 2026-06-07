<template>

    <div class="banner-big-wrapper">
        <div class="banner-big-block">
            <div class="left">
                <img class="laptop" src="/banner-big/laptop-left.png" alt="laptop">
                <img class="tablet1" src="/banner-big/tablet-left-up.png" alt="tablet1">
                <img class="tablet2" src="/banner-big/tablet-left-down.png" alt="tablet2">
            </div>
            <div class="center">
                <h1 class="h1-72 color-white">Big Summer Sale</h1>
                <p class="color-gray">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                <div class="buy-btn">
                    <button class="color-gray">Shop Now</button>
                </div>
            </div>
            <div class="right">
                <img class="watch" src="/banner-big/watch-right.png" alt="watch">
                <img class="phone" src="/banner-big/phone-right.png" alt="phone">
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
</script>

<style scoped>

.banner-big-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.banner-big-block {
    position: relative;
    width: 1440px;
    height: 448px;
    border-radius: 0.5rem;
    margin-top: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.1rem;
    overflow: hidden;
    background: linear-gradient(100.23deg, #2E2E2E 42.36%, #000000 98.65%);
}

.left,
.center,
.right {
    width: 33.33%;
    height: 100%;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.1rem;
}

.laptop {
    position: absolute;
    top: 0px;
    right: 900px;
    z-index: 1;
}

.tablet1 {
    position: absolute;
    top: 5px;
    right: 1170px;
    z-index: 2;
}

.tablet2 {
    position: absolute;
    top: 170px;
    right: 1095px;
    z-index: 1;
}

.watch {
    position: absolute;
    top: 248px;
    right: 0px;
    z-index: 2;
}

h1 {
    font-style:normal;
    font-weight:normal;
    letter-spacing:-0.35rem;
}

.phone {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
}

button {
    margin-top: 3rem;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(144, 144, 144, 1);
    width: 188px;
    height: 56px;
    padding: 0.75rem 0rem;
}

</style>