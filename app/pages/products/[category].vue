<template>
  <div class="products-page">
    <CommonAside />
    <CommonCategory />
    <CommonTags />
    
    <component :is="currentComponent" />

  </div>
</template>

<script setup lang="ts">
import Main from '~/components/common/Main.vue'
import Phones from '~/components/common/Phones.vue'
import SmartWatches from '~/components/common/SmartWatches.vue'
import Computers from '~/components/common/Computers.vue'
import Cameras from '~/components/common/Cameras.vue'
import Gadgets from '~/components/common/Gadgets.vue'
import Accessories from '~/components/common/Accessories.vue'

const route = useRoute()
const categorySlug = computed(() => route.params.category as string)

const componentMap = {
  'phones': Phones,
  'laptops': Phones,
  'tablets': Phones,
  'smart-watches': SmartWatches,
  'cameras': Cameras,
  'headphones': Gadgets,
  'computers': Computers,
  'accessories': Accessories,
} as const

const currentComponent = computed(() => {
  console.log('Current category:', categorySlug.value)
  return componentMap[categorySlug.value as keyof typeof componentMap] || Main
})
</script>