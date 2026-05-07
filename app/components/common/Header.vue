<template>
  <header>
    <div class="bar">
      <div class="logo">
        <img src="/Logo.png" alt="logo">
      </div>
      <div class="navbar">
          <input type="search" placeholder="Search">
      </div>
      <div class="bar-icons-wrapper">
        <div class="bar-icons">
            <button class="icon-btn favorite-btn">♡</button>
            <button class="icon-btn cart-btn">🛒</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">



</script>

<style scoped>

header {
  width: 60%;
  margin: 0 auto;
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 3rem;
  width: 100%;
  gap: 1rem;
}

input {
  background-color: rgba(245, 245, 245, 1);
  border: none;
  outline: none;
  font-size: 1.5rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  padding-left: 1rem;
  width: 250px;
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

