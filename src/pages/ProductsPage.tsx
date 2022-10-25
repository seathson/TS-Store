import React, { useContext, useState } from 'react'
import { useProducts } from '../hooks/products'
import { ModalContext } from '../context/ModalContext'
import { IProduct } from '../models'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import { Product } from '../components/Product'
import { Modal } from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct'
import { Category } from '../components/Category'

export function ProductsPage() {
  const { loading, error, products, categories, addProduct, sortProducts } =
    useProducts()
  const { modal, open, close } = useContext(ModalContext)
  const [find, setFind] = useState('')

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFind(event.target.value)
  }

  return (
    <div className="wrapper flex flex-col items-center">
      <input
        type="text"
        className="outline-none border-2"
        value={find}
        onChange={(event) => handleChange(event)}
        placeholder='Product search'
      />
      <div className="flex flex-row w-full 3xl:flex-col 3xl:items-center">
        <Category categories={categories} sortProducts={sortProducts} />

        <div className="container flex flex-wrap flex-row justify-evenly pt-5 h-min">
          {loading && <Loader />}
          {error && <ErrorMessage error={error} />}
          {products.map((product) => {
            if (product.title.toLowerCase().includes(find.toLowerCase())) {
              return <Product product={product} key={product.id} />
            }
          })}

          {modal && (
            <Modal title="Create new product" onClose={close}>
              <CreateProduct onCreate={createHandler} />
            </Modal>
          )}

          <button
            className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
            onClick={open}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
