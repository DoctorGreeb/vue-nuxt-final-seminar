<!-- pages/cart.vue -->
<template>
  <div class="cart-page">
    <h1>Корзина</h1>
    <ShoppingCart />
  </div>
</template>

<script setup lang="ts">
// Можно добавить мета-данные
useHead({
  title: 'Корзина — Ваш магазин'
})
</script>

<style scoped>
.cart-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>