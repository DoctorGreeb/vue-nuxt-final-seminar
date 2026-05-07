<template>
  <div class="products-grid">
    <div v-if="pending">Загрузка...</div>
    <div v-else v-for="p in products" :key="p.id" class="product-card">
      <h3>{{ p.name }}</h3>
      <p>{{ p.description }}</p>
      <p class="price">{{ p.price }} ₽</p>
      <img v-if="p.image" :src="getImageUrl(p.image)" :alt="p.name" />
    </div>
  </div>
</template>

<script setup>
const { getAllProducts, getImageUrl } = useApi()
const { data: products, pending } = await useAsyncData(getAllProducts)
</script>