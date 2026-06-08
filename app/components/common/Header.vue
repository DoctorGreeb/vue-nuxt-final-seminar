<template>
  <header>
    <div class="header-wrapper">
      <div class="bar">
        <NuxtLink to="/" class="category-item logo">
          <img src="/Logo.png" alt="phones">
        </NuxtLink>

        <div class="navbar">
          <div class="search-wrapper">
            <img class="search-icon" src="/buttons/Search.png" alt="search-icon">
            <input type="search" placeholder="Search">
          </div>
        </div>

        <div class="bar-icons-wrapper">
          <div class="bar-icons">
            <NuxtLink to="/wishlist" class="wishlist-wrapper">
              <img src="/buttons/Favorites.png" alt="favorites-icon" class="icon-btn">
              <span v-if="wishlistCount > 0" class="wishlist-count">{{ wishlistCount }}</span>
            </NuxtLink>

            <!-- Переход на страницу корзины -->
            <NuxtLink to="/cart" class="cart-wrapper">
              <img src="/buttons/Cart.png" alt="cart-icon" class="icon-btn">
              <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { wishlistCount } = useWishlist()

const { cartCount } = useCart()
</script>

<style scoped>

input[type="search"]::placeholder {
  font-size: 14px;
  font-style: italic;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
}

.search-wrapper {
  position: relative;
  display: inline-block;
}

header {
  margin: 0 auto;
}

.header-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88px;
}

.bar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  width: 1440px;
  gap: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
}

input {
  background-color: rgba(245, 245, 245, 1);
  border: none;
  outline: none;
  font-size: 0.8rem;
  padding: 0.5rem;
  padding-left: 1rem;
  width: 372px;
  height: 56px;
  border-radius: 0.5rem;
  padding-left: 30px;
}

.bar-icons {
  display: flex;
  gap: 1rem;
}

.icon-btn {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.cart-wrapper {
  position: relative;
  cursor: pointer;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #e74c3c;
  color: white;
  font-size: 12px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  pointer-events: none;
}

.wishlist-wrapper {
  position: relative;
  cursor: pointer;
}

.wishlist-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff9800;
  color: white;
  font-size: 12px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  pointer-events: none;
}
</style>