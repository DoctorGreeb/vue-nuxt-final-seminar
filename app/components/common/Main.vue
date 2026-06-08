<template>
  <div class="grid-wrapper">
    <div class="products-grid">
      <div v-if="pending">Загрузка...</div>
      <div v-else v-for="p in products!.slice(0, 8)" :key="p.id" class="product-card">
        <NuxtLink :to="`/product/${p.id}`" class="product-image-link">
          <img :src="getImageUrl(p.images?.[0])" :alt="p.name" loading="lazy" @error="handleImageError" />
        </NuxtLink>

        <p class="compact-p">{{ p.brand }} {{ p.name || p.Product_name }}</p>
        <p class="compact-p p-name">{{ p.color }}</p>
        <p class="price">{{ p.price }} ₽</p>
        
        <div v-if="p.is_available" class="buy-btn">
          <button @click.stop="addToCart(p)">Купить</button>
        </div>
        <div v-else class="out-of-stock-btn">
          <button disabled>Нет в наличии</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getAllProducts, getImageUrl } = useApi()
const { addToCart } = useCart()

const { data: products, pending } = await useAsyncData(getAllProducts)

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '/no-photo.png'
}
</script>

<style scoped>
@import '@/assets/css/cards.css';
.product-image-link {
    display: block;
    text-decoration: none;
    cursor: pointer;
}

.product-image-link img {
    width: 100%;
    height: auto;
    transition: transform 0.2s;
}

.product-image-link:hover img {
    transform: scale(1.03);
}
</style>