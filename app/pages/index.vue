<template>
    <CommonAside />
  <div class="products-grid">
    <div v-if="pending">Загрузка...</div>
    <div v-else v-for="p in products" :key="p.id" class="product-card">


      <img v-if="p.images && p.images.length > 0" :src="getImageUrl(p.images[0])" :alt="p.name" loading="lazy" @error="(e) => {
        const img = e.target;
        img.src = '/no-photo.png';
        img.classList.add('fallback-image');
      }" />
      
      <div v-else class="no-image">Нет фото</div>

      <p class="compact-p">{{ p.brand + ' ' + (p.name || p.Product_name) + ' ' + p.characteristics[1].value +
        (p.characteristics[1].unit_type === "значение" ? "" : p.characteristics[1].unit_type) }}</p>

      <p class="compact-p p-name">{{ p.color }}</p>

      <p class="price">{{ p.price }} ₽</p>

      <div v-if="p.is_available" class="buy-btn">
        <button>Buy now</button>
      </div>
      <div v-else class="out-of-stock-btn">
        <button disabled>Out of stock</button>
      </div>

    </div>
  </div>

</template>

<script setup>
const { getAllProducts, getImageUrl } = useApi()
const { data: products, pending } = await useAsyncData(getAllProducts)
console.log(products.value?.[0])
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.product-card h3 {
  margin-bottom: 0.5rem;
}

.product-card .price {
  font-size: 1.5rem;
  font-weight: bold;
}

.product-card .no-image {
  width: 100%;
  height: 200px;
  background-color: #ccc;
  border-radius: 0.5rem;
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
  padding-bottom: 1rem;
}

.buy-btn,
.out-of-stock-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.buy-btn button {
  background-color: rgba(0, 0, 0, 1);
  color: white;
  border: none;
  padding: 0.75rem 4rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.buy-btn button:hover {
  background-color: #ffffff;
  color: rgba(0, 0, 0, 1);
  transform: translateY(-1px);
  border: 1px solid rgba(0, 0, 0, 1);
}

.out-of-stock-btn button {
  background-color: #e7e7e7;
  color: white;
  border: none;
  padding: 0.75rem 4rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: not-allowed;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.p-name {
  &:hover {
    position: relative;
    bottom: 0;
    white-space: normal;
    overflow: visible;
    max-height: 200px;
    z-index: 10;
    background: white;
    padding: 4px 8px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
}
</style>