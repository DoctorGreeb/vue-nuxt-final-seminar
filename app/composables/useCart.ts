// composables/useCart.ts
export const useCart = () => {
  const cart = useState('cart', () => [] as any[])

  const addToCart = (product: any) => {
    if (!product?.id) return

    const existing = cart.value.find((i: any) => i.id === product.id)
    
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
    
    console.log('✅ Добавлено в корзину:', product.name || product.Product_name)
  }

  const removeFromCart = (id: number) => {
    cart.value = cart.value.filter((i: any) => i.id !== id)
  }

  const cartCount = computed(() => cart.value.length)

  const totalPrice = computed(() => 
    cart.value.reduce((sum: number, item: any) => 
      sum + (Number(item.discount_price) || Number(item.price) || 0) * (item.quantity || 1), 0)
  )

  return { 
    cart, 
    cartCount, 
    totalPrice, 
    addToCart, 
    removeFromCart 
  }
}