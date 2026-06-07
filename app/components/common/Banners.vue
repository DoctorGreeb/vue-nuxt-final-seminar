<template>
  <div class="grid-wrapper">
    <div class="products-grid">
      <div v-if="pending">Загрузка...</div>
      <div v-else v-for="(p, index) in randomProducts" :key="p.id" class="product-card">
        <img v-if="p.images && p.images.length > 0" :src="getImageUrl(p.images[0]!)" :alt="p.name"
          loading="lazy" @error="(e: Event) => {
            const img = e.target as HTMLImageElement;
            img.src = '/no-photo.png';
            img.classList.add('fallback-image');
          }" />

        <div v-else class="no-image">Нет фото</div>
        <p v-if="index === 0" class="compact-p italic33">Popular Products</p>
          <p v-else class="compact-p italic33">
            {{ p.brand + ' ' + (p.name || p.Product_name) + ' ' +
              (p.characteristics?.[1]?.value || '') +
              (p.characteristics?.[1]?.unit_type === 'значение' ? '' : p.characteristics?.[1]?.unit_type || '') }}
          </p>
        <p class="compact-p p-name italic14">{{ p.color }}</p>
        <p class="price">{{ p.price }} ₽</p>
        <div v-if="p.is_available" class="buy-btn">
          <button>Buy now</button>
        </div>
        <div v-else class="out-of-stock-btn">
          <button disabled>Out of stock</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getAllProducts, getImageUrl } = useApi()
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

// Вычисляемое свойство с перемешанными товарами
const randomProducts = computed(() => {
  if (!products.value) return []
  return shuffleArray(products.value).slice(0, 4)
})
</script>

<style scoped>
@import '@/assets/css/cards.css';

.products-grid {
    width: 1440px;
    gap: 0rem;
}

.product-card {
    height: 640px;
    width: auto;
}

.product-card img {
    width: 327px;
    height: auto;
    object-fit: cover;
    border-radius: 0.5rem;
    padding-bottom: 1rem;
}

.compact-p {
    margin: 0 1rem 0 1rem;
}

</style>