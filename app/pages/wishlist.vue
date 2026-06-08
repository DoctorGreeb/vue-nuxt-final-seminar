<template>
  <div class="wishlist-wrapper">
      <div class="wishlist-page">
        <h1>Favorite ({{ wishlistCount }})</h1>
        <div v-if="wishlist.length === 0" class="empty">
          <p class="empty-text">Favorites list is empty</p>
          <NuxtLink class="back-to-shop" to="/">Back to shop</NuxtLink>
        </div>
        <div v-else class="wishlist-items">
          <div v-for="item in wishlist" :key="item.id" class="wishlist-item">
            <NuxtLink :to="`/product/${item.id}`">
              <img :src="getImageUrl(item.images?.[0])" :alt="item.name" />
            </NuxtLink>
            <div class="info">
              <h3>{{ item.brand }} {{ item.name || item.Product_name }}</h3>
              <p>{{ item.color }}</p>
              <p class="result"><code>{{ generatedCode }}</code></p>
            </div>
            <button class="remove-btn" @click="removeFromWishlist(item.id)">Удалить</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted, watch } from 'vue'

const minLength = ref(7)  
const maxLength = ref(14)

const generatedCode = ref('')

const generateRandomNumberString = (length: number): string => {
  if (length <= 0) return ''
  
  let result = ''
  for (let i = 0; i < length; i++) {
    const digit = Math.floor(Math.random() * 10)
    result += digit.toString()
  }
  return result
}

const generateRandomCode = () => {
  let min = Math.min(minLength.value, maxLength.value)
  let max = Math.max(minLength.value, maxLength.value)
  
  const digitsCount = Math.floor(Math.random() * (max - min + 1)) + min
  
  const randomDigits = generateRandomNumberString(digitsCount)
  
  generatedCode.value = `#${randomDigits}`
}

onMounted(() => {
  generateRandomCode()
})


const { wishlist, wishlistCount, removeFromWishlist } = useWishlist()
const { getImageUrl } = useApi()
</script>

<style scoped>

.wishlist-wrapper {
    display: flex;
}

h1 {
    font-size: 24px;
    font-family: 'Abel', sans-serif;
    font-style: normal;
}

p {
    margin-bottom: 10px;
}

.wishlist-page {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
}

.wishlist-item {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
}

.wishlist-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.wishlist-item img {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.remove-btn {
  background: #ff4444;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

.back-to-shop {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 30px;
  background: #000;
  color: white;
  text-decoration: none;
  border-radius: 8px;
}

.empty-text {
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  color: rgba(144, 144, 144, 1);
  font-family: 'Abel', sans-serif;
}
</style>