import { useEffect, useState } from 'react'
import { IProduct } from '../models'
import axios, { AxiosError } from 'axios'

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product: IProduct) {
    setProducts((prev) => [...prev, product])
  }

  async function sortProducts(categories: string[]) {
    if (categories.length === 0) return fetchProducts()

    setProducts([])
    categories.map(async (category) => {
      const url = `https://dummyjson.com/products/category/${category}`
      const response = await axios.get(url)

      setProducts((prev) => [...prev, ...response.data.products])
    })
  }

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const responseOne = await axios.get(
        'https://dummyjson.com/products?limit=70'
      )
      const responseTwo = await axios.get(
        'https://dummyjson.com/products/categories'
      )
      setProducts(responseOne.data.products)
      setCategories(responseTwo.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, categories, error, loading, addProduct, sortProducts }
}
