<template>
    <div class="tags-wrapper">
        <div class="tags-block">
            <div class="tag">
                <p class="tag-name italic18">New Arrival</p>
                <p class="tag-name italic18">Bestseller</p>
                <p class="tag-name italic18">Featured Products</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.tags-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 2rem;
}

.tags-block {
    width: 1120px;
    margin-top: 4rem;
}

.tag {
    display: flex;
    justify-content: first baseline;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
}

</style>