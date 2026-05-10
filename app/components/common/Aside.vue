<template>
  <aside class="sidebar">
    <div class="sidebar-section">
      <h3>Категории</h3>
      <ul>
        <li><a href="#">Все товары</a></li>
        <li><a href="#">iPhone</a></li>
        <li><a href="#">iPad</a></li>
        <li><a href="#">MacBook</a></li>
        <li><a href="#">Apple Watch</a></li>
      </ul>
    </div>

    <div class="sidebar-section">
      <h3>Память</h3>
      <div class="radio-group">
        <label class="radio-label">
          <input type="radio" name="storage" value="256"/>
          <span class="radio-custom"></span>
          256GB
        </label>
        <label class="radio-label">
          <input type="radio" name="storage" value="512"/>
          <span class="radio-custom"></span>
          512GB
        </label>
      </div>
    </div>

    <div class="sidebar-section">
      <h3>Наличие</h3>
      <label class="checkbox-label">
        <input type="checkbox" v-model="inStock" />
        <span class="checkbox-custom"></span>
        В наличии
      </label>
    </div>

    <div class="sidebar-section">
      <h3>Цена</h3>
      <div class="price-filter">
        <input type="number" placeholder="от" v-model="priceFrom" @input="updateSliderFromInput" />
        <span>—</span>
        <input type="number" placeholder="до" v-model="priceTo" @input="updateSliderToInput" />
      </div>
      <div class="wrapper">
        <div class="values">
        </div>
        <div class="container">
          <div class="slider-track" :style="sliderTrackStyle"></div>
          <input 
            type="range" 
            :min="minPrice" 
            :max="maxPrice" 
            v-model.number="minValue" 
            @input="updatePriceFromSlider"
          />
          <input 
            type="range" 
            :min="minPrice" 
            :max="maxPrice" 
            v-model.number="maxValue" 
            @input="updatePriceToSlider"
          />
        </div>
      </div>
    </div>

    <button class="apply-btn">Применить</button>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const minPrice = ref(0)
const maxPrice = ref(100000)
const minValue = ref(20000)
const maxValue = ref(80000)
const priceFrom = ref('')
const priceTo = ref('')
const inStock = ref(false)

// Инициализация полей ввода
priceFrom.value = minValue.value.toString()
priceTo.value = maxValue.value.toString()

// Вычисляем стиль для слайдер-трека
const sliderTrackStyle = computed(() => {
  const left = ((minValue.value - minPrice.value) / (maxPrice.value - minPrice.value)) * 100
  const right = ((maxValue.value - minPrice.value) / (maxPrice.value - minPrice.value)) * 100
  const width = right - left
  
  return {
    left: left + '%',
    width: width + '%'
  }
})

// Обновление поля "от" при движении левого слайдера
const updatePriceFromSlider = () => {
  if (minValue.value > maxValue.value) {
    minValue.value = maxValue.value
  }
  priceFrom.value = minValue.value.toString()
}

// Обновление поля "до" при движении правого слайдера
const updatePriceToSlider = () => {
  if (maxValue.value < minValue.value) {
    maxValue.value = minValue.value
  }
  priceTo.value = maxValue.value.toString()
}

// Обновление слайдера при вводе в поле "от"
const updateSliderFromInput = () => {
  let value = parseInt(priceFrom.value) || minPrice.value
  if (value < minPrice.value) value = minPrice.value
  if (value > maxValue.value) value = maxValue.value
  minValue.value = value
  priceFrom.value = value.toString()
}

// Обновление слайдера при вводе в поле "до"
const updateSliderToInput = () => {
  let value = parseInt(priceTo.value) || maxPrice.value
  if (value > maxPrice.value) value = maxPrice.value
  if (value < minValue.value) value = minValue.value
  maxValue.value = value
  priceTo.value = value.toString()
}
</script>

<style scoped>
.wrapper {
  width: 90%;
  margin: 1rem auto 0;
}

.values {
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.container {
  position: relative;
  width: 100%;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
}

input[type="range"] {
  position: absolute;
  width: 100%;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  appearance: none;
  top: 0;
  bottom: 0;
  margin: 0;
}

input[type="range"]::-webkit-slider-thumb {
  pointer-events: auto;
  cursor: pointer;
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  background-color: #3264fe;
  border-radius: 50%;
  margin-top: -5px;
}

input[type="range"]::-moz-range-thumb {
  pointer-events: auto;
  cursor: pointer;
  height: 20px;
  width: 20px;
  background-color: #3264fe;
  border-radius: 50%;
  border: none;
}

.slider-track {
  position: absolute;
  height: 100%;
  background-color: #3264fe;
  border-radius: 5px;
  top: 0;
}

.sidebar {
  position: fixed;
  left: -300px;
  top: 50%;
  transform: translateY(-50%);
  width: 250px;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 0 0.5rem 0.5rem 0;
  height: fit-content;
  transition: left 0.4s ease, background 0.4s ease, box-shadow 0.4s ease;
  z-index: 100;
}

.sidebar:hover {
  left: 0;
  background: #fff;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.15);
}

.sidebar::after {
  content: '☰';
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 60px;
  background: #f9f9f9;
  border-radius: 0 6px 6px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #333;
  cursor: pointer;
  transition: background 0.3s ease;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
}

.sidebar:hover::after {
  background: #fff;
}

.sidebar-section {
  margin-bottom: 1.5rem;
}

.sidebar-section h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.sidebar-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-section ul li {
  margin-bottom: 0.5rem;
}

.sidebar-section ul li a {
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.sidebar-section ul li a:hover {
  color: #000;
}

.price-filter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.price-filter input {
  width: 80px;
  padding: 0.4rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 0.85rem;
}

.price-filter span {
  color: #999;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
}

.apply-btn {
  width: 100%;
  padding: 0.6rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.apply-btn:hover {
  background: #333;
}
</style>