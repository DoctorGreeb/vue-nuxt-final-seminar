<template>
  <div class="grid-wrapper">
    <div class="products-grid">
      <div v-if="pending">Загрузка...</div>
      <div v-else v-for="(p) in randomProducts" :key="p.id" class="product-card">
        <div class="card-img">
              <NuxtLink :to="`/product/${p.id}`" class="product-image-link">
                <img class="block-img" :src="getImageUrl(p.images?.[0])" :alt="p.name" loading="lazy" @error="handleImageError" />
              </NuxtLink>

              <p class="compact-p">{{ p.brand }} {{ p.name || p.Product_name }}</p>


              <p class="compact-p p-name ">{{ p.color }}</p>


              <p class="price">{{ p.price }} ₽</p>

        </div>

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

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffled[i] as T
    shuffled[i] = shuffled[j] as T
    shuffled[j] = temp
  }
  return shuffled
}

const randomProducts = computed(() => {
  if (!products.value) return []
  return shuffleArray(products.value).slice(0, 4)
})

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '/no-photo.png'
}
</script>

<style scoped>
@import '@/assets/css/cards.css';

.p-name {
  overflow: hidden;
}

.product-card {
  display: flex;
  flex-direction: column;
  height: 400px;
}

.card-img {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-image-link {
  display: block;
}

.block-img {
  width: 100%;
  height: 250px;
  object-fit: contain;
}

.compact-p:first-of-type {
  min-height: 32px;
}

.italic14 {
  min-height: 20px;
}

.price {
  font-weight: 700;
  font-size: 20px;
}

.buy-btn,
.out-of-stock-btn {
  margin-bottom: 32px;
}
</style>