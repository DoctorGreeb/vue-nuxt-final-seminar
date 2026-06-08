<template>
  <div class="grid-wrapper">
    <div class="products-grid">
      <div v-if="pending">Загрузка товаров...</div>
      <div v-else-if="filteredProducts.length === 0">Товары отсутствуют</div>
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
    product.category === 'Часы' || product.category?.toLowerCase().includes('часы')
  )
})

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '/no-photo.png'
}
</script>

<style scoped>
@import '@/assets/css/cards.css';

.product-card {
  display: flex;
  flex-direction: column;
  height: 500px; /* одинаковая высота всех карточек */
}

.card-img {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-image-link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 260px;
}

.product-image-link img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-title {
  height: 48px; /* фиксированная высота названия */
  overflow: hidden;
}

.product-info {
  height: 24px; /* фиксированная высота цвета */
}

.price {
  margin-top: auto; /* толкает цену вниз */
  font-size: 20px;
  font-weight: 700;
}

.buy-btn,
.out-of-stock-btn {
  margin-top: 12px;
  padding-bottom: 42px;
}

.p-name {
  overflow: hidden;
  height: 36px;
}

</style>