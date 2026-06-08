<template>
  <header>
    <div class="header-wrapper">
      <div class="bar">
        <NuxtLink to="/" class="category-item logo">
          <img src="/Logo.png" alt="phones">
        </NuxtLink>
        <div class="navbar">
          <img class="search-icon" src="/buttons/Search.png" alt="search-icon">
          <input type="search" placeholder="Search">
        </div>
        <div class="bar-icons-wrapper">
          <div class="bar-icons">
            <img src="/buttons/Favorites.png" alt="favorites-icon">
            <img src="/buttons/Cart.png" alt="cart-icon">
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">



</script>



<style scoped>
input[type="search"]::placeholder {
  font-size: 10px;
  font-style: italic;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  position: relative;

}

.search-icon {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
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
  justify-content: space-around;
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
  font-size: 1.5rem;
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
</style>
