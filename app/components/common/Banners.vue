<template>
  <div class="grid-wrapper">
    <div class="products-grid">
      <div v-if="pending">Загрузка...</div>
      <div v-for="(p, index) in randomProducts" :key="p.id" :class="{
        'product-card': true,
        'index-banner1': index === 1,
        'index-banner2': index === 2,
        'index-banner3': index === 3
      }">
        <div class="banners-card-img">
          <div class="banners-card-img-content">
            <img 
              v-if="p.images && p.images.length > 0" 
              :src="getImageUrl(p.images[0])" 
              :alt="p.name"
              loading="lazy" 
              @error="handleImageError"
            />
            <div v-else class="no-image">Нет фото</div>
            
            <p v-if="index === 0" class="compact-p italic33">Popular Products</p>
            <p v-else class="compact-p italic33">
              {{ p.brand + ' ' + (p.name || p.Product_name) }}
            </p>
          </div>
          <div class="banners-desc">
            <p class="compact-p italic14">{{ getProductText(p, index) }}</p>
            <p v-if="index !== 0" class="price">{{ p.price }} ₽</p>
          </div>
        </div>

        <div v-if="p.is_available" class="buy-btn">
          <button @click.stop="addToCart(p)">Купить</button>
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
const { addToCart } = useCart()

const { data: products, pending } = await useAsyncData(getAllProducts)

const categoryTexts: Record<string, string[]> = {
  'Смартфоны': [
    'Обновления 7 лет, высокая остаточная стоимость',
    'Бесшовная интеграция с Mac и iPad',
    'Аппаратное шифрование, приватность по умолчанию',
    'Эталонная видеосъёмка, плавность анимаций'
  ],
  'Компьютеры': [
    'Автономность до 15 часов, бесшумная работа',
    'Дисплей Retina с цветопередачей P3',
    'Чипы M-серии без вентиляторов',
    'Передача задач между устройствами Apple'
  ],
  'Планшеты': [
    'Вес 600 г, производительность M2',
    'ProMotion 120 Гц, Apple Pencil 2',
    'Поддержка внешних дисков и мыши',
    'До 10 часов активной работы'
  ],
  'Часы': [
    'Детекция аритмии и падений',
    'Пульс, SpO2, отслеживание сна',
    'Звонки и сообщения без телефона',
    'WR50, трекинг плавания'
  ],
  'Гаджеты': [
    'Автопауза при извлечении из ушей',
    'Пространственное аудио с трекингом головы',
    'Кейс-зарядка с магнитной фиксацией',
    'Режим прозрачности окружающих звуков'
  ],
  'Аксессуары': [
    'Точная посадка, стойкость цвета',
    'MagSafe: магниты + быстрая зарядка',
    'Тактильные материалы премиум',
    'Сертификация по стандартам Apple'
  ]
}

const getProductText = (p: any, index: number) => {
  if (index === 0 && p.category !== 'Смартфоны') return 'Popular Products'
  if (categoryTexts[p.category]?.[index]) return categoryTexts[p.category]![index]
  return `${p.brand} ${p.name || p.Product_name}`
}

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

.products-grid {
  width: 1440px;
  gap: 0rem;
  margin: 3rem auto;
}

.product-card {
  height: 640px;
  width: auto;
  box-shadow: none;
  border-radius: 0px;
}

.product-card img {
  width: 327px;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
  padding-bottom: 1rem;
  object-fit: contain;
  background-color: #f9f9f9;
  mix-blend-mode: multiply;
}

.product-card.index-banner3 img {
  background-color: #2c2c2c;
  mix-blend-mode: normal;
  mask-image: radial-gradient(circle at center,
      black 0%,
      black calc(100% - 10px),
      transparent 100%);
  -webkit-mask-image:
    radial-gradient(circle farthest-corner, black 50%, transparent 100%)
}

.compact-p {
  margin: 0 1rem 0 1rem;

}
.italic33 {
      overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 300px;
}

.banners-desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.banners-card-img-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.index-banner1 {
  background-color: rgba(249, 249, 249, 1);
}

.index-banner2 {
  background-color: rgba(234, 234, 234, 1);
}

.index-banner3 {
  background-color: rgba(44, 44, 44, 1);
  color: white;
}

.banners-card-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  min-height: 520px;
}
</style>