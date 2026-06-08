<template>
  <div class="cart-page">
    <div class="cart-container">
      <p class="cart-title">Cart</p>

      <div v-if="cart.length === 0" class="empty-cart">
        <p class="empty-text">Your cart is empty</p>
        <NuxtLink class="back-to-shop" to="/">Back to shop</NuxtLink>
      </div>

      <div v-else>
        <div class="cart-items">
          <div v-for="item in cart" :key="item.id" class="cart-item">
            <div class="item-image">
              <img 
                :src="getImageUrl(item.images?.[0])" 
                :alt="item.name || item.Product_name"
                @error="(e) => { (e.target as HTMLImageElement).src = '/no-photo.png' }"
              />
            </div>

            <div class="item-details">
              <h3>{{ item.brand }} {{ item.name || item.Product_name }}</h3>
              <p class="item-color">{{ item.color }}</p>
            </div>

            <div class="item-price">
              {{ (item.discount_price || item.price) }} ₽
            </div>

            <div class="item-quantity">
              <button @click="decrease(item.id)">–</button>
              <span>{{ item.quantity }}</span>
              <button @click="increase(item.id)">+</button>
            </div>

            <div class="item-subtotal">
              {{ (item.discount_price || item.price) * item.quantity }} ₽
            </div>

            <button class="remove-btn" @click="removeFromCart(item.id)">Удалить</button>
          </div>
        </div>

        <div class="cart-summary">
          <div class="total">
            <span>Итого к оплате:</span>
            <strong>{{ totalPrice }} ₽</strong>
          </div>
          <button class="checkout-btn">Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { cart, totalPrice, removeFromCart, addToCart } = useCart()
const { getImageUrl } = useApi()

const increase = (id: number) => {
  const item = cart.value.find((i: any) => i.id === id)
  if (item) item.quantity++
}

const decrease = (id: number) => {
  const item = cart.value.find((i: any) => i.id === id)
  if (item) {
    if (item.quantity > 1) {
      item.quantity--
    } else {
      removeFromCart(id)
    }
  }
}
</script>

<style scoped>

.cart-page {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.cart-container h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
}

.cart-items {
  margin-bottom: 40px;
}

.cart-item {
  display: grid;
  grid-template-columns: 100px 2fr 1fr 120px 1fr 80px;
  gap: 15px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.item-image img {
  width: 90px;
  height: 90px;
  object-fit: contain;
  background: #f9f9f9;
  border-radius: 8px;
}

.item-details h3 {
  margin: 0 0 5px 0;
  font-size: 1.1rem;
}

.item-color {
  color: #666;
  margin: 0;
}

.item-price, .item-subtotal {
  font-weight: 600;
  font-size: 1.1rem;
}

.item-quantity {
  display: flex;
  align-items: center;
  gap: 8px;
}

.item-quantity button {
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 6px;
  cursor: pointer;
}

.remove-btn {
  background: #ff4444;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.cart-summary {
  text-align: right;
  padding-top: 20px;
  border-top: 2px solid #eee;
}

.total {
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.checkout-btn {
  background: #000;
  color: white;
  padding: 16px 50px;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  max-width: 400px;
}

.empty-cart {
  text-align: center;
  padding: 0px 20px;
}

.back-to-shop {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 30px;
  background: #000;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-left: -53px;
  
}

.empty-text {
  font-size: 24px;
  text-align: center;
  color: rgba(144, 144, 144, 1);
  font-family: 'Abel', sans-serif;
  margin-bottom: 20px;
  margin-left: -40px;
  
}

.cart-title {
  font-size: 24px;
  font-family: 'Abel', sans-serif;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  padding-top: 10px;
  margin-bottom: 20px;
  margin-left: -170px;
}
</style>