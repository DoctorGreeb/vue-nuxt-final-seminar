// composables/useWishlist.ts
export const useWishlist = () => {
  const wishlist = useState('wishlist', () => [] as any[])

  const addToWishlist = (product: any) => {
    if (!product?.id) return

    const exists = wishlist.value.find((item: any) => item.id === product.id)
    
    if (!exists) {
      wishlist.value.push(product)
      console.log('Добавлено в избранное:', product.name || product.Product_name)
    } else {
      console.log('Уже в избранном')
    }
  }

  const removeFromWishlist = (id: number) => {
    wishlist.value = wishlist.value.filter((item: any) => item.id !== id)
  }

  const toggleWishlist = (product: any) => {
    const exists = wishlist.value.some((item: any) => item.id === product.id)
    if (exists) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const wishlistCount = computed(() => wishlist.value.length)

  return {
    wishlist,
    wishlistCount,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist
  }
}