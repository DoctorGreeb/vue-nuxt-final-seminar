<template>
    <div class="category-wrapper">
        <div class="category-block">
            <div class="browse-category">
                <h2 class="italic">Browse by category</h2>
                <div>
                    <img src="/buttons/Arrow.png" alt="arrow" class="arrow-left">
                    <img src="/buttons/Arrow.png" alt="arrow" class="arrow-right">
                </div>
            </div>

            <div class="category-list">
                <NuxtLink to="/products/phones" class="category-item">
                    <img src="/buttons/Phones.png" alt="phones">
                    <p class="italic">Phones</p>
                </NuxtLink>
                
                <NuxtLink to="/products/smart-watches" class="category-item">
                    <img src="/buttons/Smart Watches.png" alt="swatches">
                    <p class="italic">Smart Watches</p>
                </NuxtLink>
                
                <NuxtLink to="/products/cameras" class="category-item">
                    <img src="/buttons/Cameras.png" alt="cams">
                    <p class="italic">Cameras</p>
                </NuxtLink>
                
                <NuxtLink to="/products/headphones" class="category-item">
                    <img src="/buttons/Headphones.png" alt="heads">
                    <p class="italic">Headphones</p>
                </NuxtLink>
                
                <NuxtLink to="/products/computers" class="category-item">
                    <img src="/buttons/Computers.png" alt="pc">
                    <p class="italic">Computers</p>
                </NuxtLink>
                
                <NuxtLink to="/products/accessories" class="category-item">
                    <img src="/buttons/Gaming.png" alt="gmng">
                    <p class="italic">Accessories</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.category-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.category-block {
    width: 1120px;
}

.browse-category {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 0.5rem;
    margin-bottom: 1rem;
}

.category-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
}

.category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: rgba(237, 237, 237, 1);
    min-width: 160px;
    height: 128px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
}

.category-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.arrow-right {
    transform: rotate(180deg);
}
</style>