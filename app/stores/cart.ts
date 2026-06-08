// app/stores/cart.ts — Временная версия без Pinia (чтобы убрать ошибки)
export const useCartStore = () => {
  const items: any[] = []

  const addItem = (product: any) => {
    const existing = items.find((item: any) => item.id === product.id)
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1
    } else {
      items.push({ ...product, quantity: 1 })
    }
    console.log('Добавлено в корзину:', product.name)
  }

  const removeItem = (id: number) => {
    const index = items.findIndex((item: any) => item.id === id)
    if (index !== -1) items.splice(index, 1)
  }

  const clearCart = () => {
    items.length = 0
  }

  const cartCount = () => items.length

  return { items, addItem, removeItem, clearCart, cartCount }
}