export interface Product {
  id: number,
  name: string,
  description: string,
  price: number,
  gender: string,
  type: string,
  img: string,
  category: string
  user?: string
  cart?: boolean
  wishlist?: boolean
}