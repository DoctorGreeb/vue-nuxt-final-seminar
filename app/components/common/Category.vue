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
                <div class="category-item">
                    <img src="/buttons/Phones.png" alt="phones">
                    <p class="italic">Phones</p>
                </div>
                <div class="category-item">
                    <img src="/buttons/Smart Watches.png" alt="swatches">
                    <p class="italic">Smart Watches</p>
                </div>
                <div class="category-item">
                    <img src="/buttons/Cameras.png" alt="cams">
                    <p class="italic">Cameras</p>
                </div>
                <div class="category-item">
                    <img src="/buttons/Headphones.png" alt="heads">
                    <p class="italic">Headphones</p>
                </div>
                <div class="category-item">
                    <img src="/buttons/Computers.png" alt="pc">
                    <p class="italic">Computers</p>
                </div>
                <div class="category-item">
                    <img src="/buttons/Gaming.png" alt="gmng">
                    <p class="italic">Gaming</p>
                </div>
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
}

.arrow-right {
    transform: rotate(180deg);
}
</style>