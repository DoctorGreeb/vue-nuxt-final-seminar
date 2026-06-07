<template>
    <div class="ads-wrapper">
        <div class="ads">
           <aside class="aside-left">

            <div class="block-upper">
                            
                <div class="block-upper-inner-left">
                    <img src="/PlayStation.png" alt="ps5">
                </div>
                <div class="block-upper-inner-right">
                    <h1 class="h1-49">Playstation 5</h1>
                    <p class="italic16">Incredibly powerful CPUs, GPUs, and an SSD 
                    with integrated I/O will redefine your PlayStation experience.</p>
                </div>
            </div>
            <div class="block-lower">
                <div class="block-lower-inner">
                    <div class="block-lower-inner-left">
                        <img src="/Hero.png" alt="AirPods">
                    </div>
                    <div class="block-lower-inner-right width-shrink">
                        <h1 >Apple AirPods Max</h1>
                        <p class="italic16">Computational audio. Listen, it's powerful</p>
                    </div>
                </div>
                <div class="block-lower-inner bg-color-dark">
                    <div class="block-lower-inner-left">
                        <img src="/glasses.png" alt="AirPods">
                    </div>
                    <div class="block-lower-inner-right width-shrink">
                        <h1 class="color-white">Apple Vision Pro</h1>
                        <p class="italic16">An immersive way to experience entertainment</p>
                    </div>
                </div>
            </div>
           </aside>
           <aside class="aside-right">
            <div class="block-left">
                <div class="macbook-air">
                    <h1 class="h1-64 h1-non-italic">Macbook</h1>
                    <h1 class="h1-64">Air</h1>
                </div>

                <p class="italic16">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                <button class="italic16">Shop Now</button>
            </div>
            <div class="block-right">
                <img src="/MacBookPro14.png" alt="mbk-pro">
            </div>
           </aside>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>


<style scoped>
.macbook-air {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  max-width: 150px;
}

.h1-non-italic {
    font-style: normal !important;
    font-weight: normal !important;
}

h1 {
    font-family: 'Abel', sans-serif;
    letter-spacing: 0.2rem;
}

.ads-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.ads {
    background-color: rgb(235, 235, 235);
    width: 1440px;
    height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;

}

.ads .aside-left {
    display: flex;
    flex-direction: column;
}

.block-upper {
    display: flex;
    flex-direction: row;
    background-color: rgba(255, 255, 255, 1);
}

.block-left {
    padding-left: 2.5rem;
}

.block-lower {
    display: flex;
    flex-direction: row;
  }

.block-lower-inner {
    display: flex;
    flex-direction: row;
    width: 50%;

}

.block-lower-inner-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem;
}

.width-shrink {
  width: 160px;
}

.block-lower-inner-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.aside-right {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.aside-right .block-left {
    margin-left: 1rem;
    display: flex;
   
    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;
}

.aside-right .block-left button {
    background-color: rgba(0, 0, 0, 0);
    color: rgb(0, 0, 0);
    padding: 0.75rem 4rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

}
.block-right {
    width: 38%;
}

.block-right img {
    height: auto;
    overflow: hidden;
}

.block-upper-inner-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
}


</style>