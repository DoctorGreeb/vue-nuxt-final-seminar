<template>
  <div class="grid-wrapper">
    <div class="products-grid">
      <div v-if="pending">Загрузка товаров...</div>
      <div v-else-if="filteredProducts.length === 0">Товары отсутствуют</div>
      <div v-else v-for="p in filteredProducts" :key="p.id" class="product-card">
        
        <div class="card-img">
            <NuxtLink :to="`/product/${p.id}`" class="product-image-link">
                    <img 
                        v-if="p.images && p.images.length > 0" 
                        :src="getImageUrl(p.images[0]!)" 
                        :alt="p.name"
                        loading="lazy" 
                        @error="(e: Event) => {
                            const img = e.target as HTMLImageElement;
                            img.src = '/no-photo.png';
                            img.classList.add('fallback-image');
                        }" 
                    />
                    <div v-else class="no-image">Нет фото</div>
                </NuxtLink>
            <p class="compact-p product-title">
                  {{ p.brand }} {{ p.name || p.Product_name }}
                </p>
            <div class="product-info">
                
                <p class="compact-p p-name">{{ p.color }}</p>
                
            </div>
            <p class="price">{{ p.price }} ₽</p>
        </div>

        <div v-if="p.is_available" class="buy-btn">
          <button>Купить сейчас</button>
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

const { data: allProducts, pending } = await useAsyncData('all-products', getAllProducts)

const filteredProducts = computed(() => {
  if (!allProducts.value) return []
  
  return allProducts.value.filter(product => 
    product.category === 'Часы' || 
    product.category?.toLowerCase().includes('часы')
  )
})

</script>

<style scoped>
@import '@/assets/css/cards.css';
</style>