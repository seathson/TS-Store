export interface IProduct {
  id?: number
  title: string
  price: number
  description: string
  category: string
  images: Array<string>
  rating: number
  stock: number
}