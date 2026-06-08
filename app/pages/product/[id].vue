<template>
    <div class="product-detail" v-if="product">
        <div class="product-header">

            <div class="image-container">
                <img loading="lazy" decoding="async" fetchpriority="low" :src="getImageUrl(product.images?.[0])"
                    :alt="product.name" class="main-image" @error="(e: Event) => {
                        const img = e.target as HTMLImageElement;
                        img.src = '/no-photo.png';
                    }" />
            </div>

            <div class="product-info">
                <h1>{{ product.brand }} {{ product.name || product.Product_name }}</h1>
                <p class="color">{{ product.color }}</p>

                <div class="price-block">

                    <span class="current-price">
                        ₽{{ product.discount_price || product.price }}
                    </span>
                    <span v-if="product.discount_price" class="old-price">
                        ₽{{ product.price }}
                    </span>
                </div>

                <div class="characteristics-block">
                    <!-- Смартфоны -->
                    <div v-if="product.category === 'Смартфоны'" class="specs">
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/screensize.png" alt="screen">
                            </div>
                            <div class="spec-text">
                                <p>Screen size</p>
                                {{ product.characteristics?.[6]?.value }}
                            </div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/processor.png" alt="proc">
                            </div>
                            <div class="spec-text">{{ product.characteristics?.[0]?.value }}</div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/rom.png" alt="rom">
                            </div>
                            <div class="spec-text">{{ product.characteristics?.[1]?.value }}</div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/date.png" alt="date">
                            </div>
                            <div class="spec-text">{{ product.characteristics?.[2]?.value }}</div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/material.png" alt="material">
                            </div>
                            <div class="spec-text">{{ product.characteristics?.[4]?.value }}</div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/clockface.png" alt="resolution">
                            </div>
                            <div class="spec-text">{{ product.characteristics?.[7]?.value }}</div>
                        </div>
                    </div>

                    <!-- Часы -->
                    <div v-else-if="product.category === 'Часы'" class="specs">

                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/screensize.png" alt="screen">
                            </div>
                            <div class="spec-text">
                                <p>Screen size</p>
                                {{ product.characteristics?.[3]?.value }}
                            </div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/processor.png" alt="proc">
                            </div>

                            <div class="spec-text">
                                <p>CPU</p>
                                {{ product.characteristics?.[0]?.value }}
                            </div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/batt.png" alt="batt">
                            </div>

                            <div class="spec-text">
                                <p>Battery</p>
                                {{ product.characteristics?.[1]?.value }}
                            </div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/material.png" alt="material">
                            </div>
                            <div class="spec-text">
                                <p>Material</p>
                                {{ product.characteristics?.[2]?.value }}
                            </div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/weight.png" alt="weight">
                            </div>
                            <div class="spec-text">
                                <p>Weight</p>
                                {{ product.characteristics?.[4]?.value }}g
                            </div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/clockface.png" alt="clockface">
                            </div>
                            <div class="spec-text">
                                <p>Clockface</p>
                                {{ product.characteristics?.[5]?.value }}mm
                            </div>
                        </div>

                    </div>

                    <!-- Компьютеры -->
                    <div v-else-if="product.category === 'Компьютеры'" class="specs">
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/processor.png" alt="cpu">
                            </div>
                            <div class="spec-text">{{ product.characteristics?.[0]?.value }}</div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/rom.png" alt="rom">
                            </div>
                            <div class="spec-text">{{ product.characteristics?.[1]?.value }}</div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/batt.png" alt="battery">
                            </div>
                            <div class="spec-text">{{ product.characteristics?.[3]?.value }}</div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/material.png" alt="material">
                            </div>
                            <div class="spec-text">{{ product.characteristics?.[4]?.value }}</div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/weight.png" alt="weight">
                            </div>
                            <div class="spec-text">{{ product.characteristics?.[5]?.value }}</div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/clockface.png" alt="clockface">
                            </div>
                            <div class="spec-text">{{ product.characteristics?.[6]?.value || '—' }}</div>
                        </div>
                    </div>

                    <!-- Аксесс -->
                    <div v-else-if="product.category === 'Аксессуары'" class="specs">
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/screensize.png" alt="brand">
                            </div>
                            <div class="spec-text">
                                <p>Для модели</p>
                                {{ product.characteristics?.[0]?.value }}
                            </div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/cores.png" alt="material">
                            </div>
                            <div class="spec-text">
                                <p>Материал</p>
                                {{ product.characteristics?.[1]?.value }}
                            </div>
                        </div>

                    </div>

                    <!-- Науши -->
                    <div v-else-if="product.category === 'Гаджеты'" class="specs">
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/processor.png" alt="cpu">
                            </div>
                            <div class="spec-text">
                                <p>Система активного шумоподавления</p>
                                {{ product.characteristics?.[2]?.value }}
                            </div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/rom.png" alt="rom">
                            </div>
                            <div class="spec-text">
                                <p>Время работы в кейсе</p>
                                {{ product.characteristics?.[1]?.value }} {{ product.characteristics?.[1]?.unit_type }}
                            </div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/batt.png" alt="type">
                            </div>
                            <div class="spec-text">
                                <p>Конструкция</p>
                                {{ product.characteristics?.[3]?.value }}
                            </div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/material.png" alt="material">
                            </div>
                            <div class="spec-text">
                                <p>Беспроводная зарядка</p>
                                {{ product.characteristics?.[4]?.value }}
                            </div>
                        </div>
                        <div class="spec">
                            <div class="pic">
                                <img src="/specs/batt.png" alt="weight">
                            </div>
                            <div class="spec-text">

                                <p>Время работы</p>
                                {{ product.characteristics?.[0]?.value }} {{ product.characteristics?.[0]?.unit_type }}
                            </div>
                        </div>
                    </div>

                    <div class="desc">
                        <p class="desc-text">{{ getCategoryDescription(product.category) }}</p>
                    </div>

                </div>

                <div class="availability-block">
                    <div class="wishilst">
                        <button class="wishlist-button">
                            Add to Wishlist
                        </button>
                    </div>
                    <div v-if="product.is_available" class="availability">
                        <div class="buy-button-block">
                        <button class="buy-button" :disabled="!product.is_available">
                            Купить
                        </button>
                    </div>
                    </div>
                    <div v-else class="availability out-of-stock">
                        Нет в наличии
                    </div>


                    
                </div>
            </div>
        </div>

        <div class="characteristics">
            <div class="details">
                <h2>Details</h2>
                <table v-if="product.characteristics && product.characteristics.length">
                    <tbody>
                        <tr v-for="char in product.characteristics" :key="char.characteristic">
                            <td class="size16">{{ char.characteristic }}</td>
                            <td class="size15">
                                {{ char.value }}
                                <span v-if="char.unit_type !== 'значение'">
                                    {{ char.unit_type }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p v-else>Характеристики не указаны</p>
            </div>
        </div>
    </div>

    <div v-else-if="pending">Загрузка товара...</div>
    <div v-else>Товар не найден</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { getAllProducts, getImageUrl } = useApi()

const { data: allProducts, pending } = await useAsyncData('all-products', getAllProducts)

const productId = Number(route.params.id)
const product = computed(() =>
    allProducts.value?.find((p: any) => p.id === productId)
)

const imageLoaded = ref(false)


const categoryDescriptions: Record<string, string> = {
    'Смартфоны': 'Мощный процессор, великолепная камера и впечатляющая автономность. iPhone сочетает в себе передовые технологии, премиальный дизайн и легендарную надёжность Apple. Идеальный баланс производительности и удобства в повседневной жизни.',
    'Компьютеры': 'Профессиональная производительность в стильном корпусе. Благодаря чипам M-серии MacBook и iMac работают бесшумно, долго держат заряд и обеспечивают невероятную скорость в любых задачах — от монтажа видео до разработки.',
    'Планшеты': 'Универсальное устройство для работы, творчества и развлечений. Большой яркий дисплей, поддержка Apple Pencil и Magic Keyboard превращают iPad в полноценную замену ноутбуку.',
    'Часы': 'Умные часы, которые следят за вашим здоровьем 24/7. Измерение пульса, уровня кислорода в крови, ЭКГ, обнаружение падений и мощный спортивный функционал в стильном корпусе.',
    'Гаджеты': 'Идеальное звучание и комфорт. Активное шумоподавление, пространственное аудио и потрясающая автономность — AirPods стали настоящим стандартом беспроводных наушников.',
    'Аксессуары': 'Оригинальные аксессуары Apple — это премиум материалы, идеальная совместимость и внимание к каждой детали. MagSafe, силиконовые чехлы и ремешки, которые служат годами.'
}

const getCategoryDescription = (category: string): string => {
    return categoryDescriptions[category] ||
        'Премиальное устройство Apple с безупречным дизайном и передовыми технологиями.'
}
</script>

<style scoped>

h1 {
    font-family: "ABeeZee", sans-serif;
}

.spec-text {
    font-family: 'Roboto', sans-serif;
}

.desc-text {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: rgba(108, 108, 108, 1);
    line-height: 1.6;
    letter-spacing: 0.5px;
}

.specs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 1rem;
    margin-bottom: 1rem;
}

.spec {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 168px;
    height: 65px;
    background-color: rgba(244, 244, 244, 1);
    gap: 0.5rem;
    border-radius: 6px;
}

.pic {
    padding-left: 1rem;
}

.product-detail {
    max-width: 1440px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.product-header {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 3rem;
    width: 1440px;
}

.image-container {
    padding: 1rem;
    border-radius: 12px;
}

.main-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: contain;
}

.product-info {
    width: 536px;
}

.product-info h1 {
    margin: 0 0 0.5rem 0;
    font-size: 2.2rem;
}

.color {
    color: #666;
    font-size: 1.1rem;
}

.price-block {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;
    margin: 1.5rem 0;
}

.old-price {
    text-decoration: line-through;
    color: #999;
    margin-right: 1rem;
    font-size: 1.3rem;
    font-family: 'ABeeZee', sans-serif;
    font-weight: normal;
}

.current-price {
    font-size: 2rem;
    font-weight: bold;
    font-family: 'ABeeZee', sans-serif;
    font-weight: normal;
}

.availability-block {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 536px;
}

.availability {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    display: inline-block;
    margin: 1rem 0;

}

.wishlist-button{
    color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    border: 1px solid rgba(0, 0, 0, 1);
    width: 260px;
    height: 56px;

}

.out-of-stock {
    background-color: #e7e7e7;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: not-allowed;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 260px;
    height: 56px;
}

.buy-button {
    background-color: rgba(0, 0, 0, 1);
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 260px;
    height: 56px;
}

.buy-button:disabled {
    background: #ccc;
    cursor: not-allowed;
}

.characteristics-block {
    width: 536px;
}

.characteristics {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    background-color: rgba(250, 250, 250, 1);
    width: 1440px;
}

.details {
    width: 1120px;
    background-color: white;
    margin: 3rem 0 3rem 0;
    padding: 3rem;
}

.characteristics table {
    width: 100%;
    border-collapse: collapse;
}

.characteristics td {
    padding: 0.8rem 1rem;
    border-bottom: 1px solid #eee;
}

.back-link {
    display: inline-block;
    margin-bottom: 1.5rem;
    color: #007bff;
    text-decoration: none;
}

.size15 {
    font-size: 15px;
    text-align: right;
}

.size16 {
    font-size: 16px;
}

.size15, .size16 {
    font-family: 'Roboto', sans-serif;
}

h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: normal;
}

@media (max-width: 768px) {
    .product-header {
        grid-template-columns: 1fr;
    }
}
</style>