<template>
  <div class="grid-wrapper">
    <div class="products-grid">
      <div v-if="pending">Загрузка товаров...</div>
      <div class="empty" v-else-if="filteredProducts.length === 0">Товары отсутствуют</div>
      <div v-else v-for="p in filteredProducts" :key="p.id" class="product-card">
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

const { data: allProducts, pending } = await useAsyncData('all-products', getAllProducts)

const filteredProducts = computed(() => {
  if (!allProducts.value) return []
  return allProducts.value.filter(product => 
    product.category === 'Фотоаппарат' || product.category?.toLowerCase().includes('фотоаппарат')
  )
})

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '/no-photo.png'
}
</script>

<style scoped>
@import '@/assets/css/cards.css';

.empty {
  text-align: center;
  padding: 60px 20px;
  font-size: 32px;
  color: rgba(144, 144, 144, 1);
}
</style>