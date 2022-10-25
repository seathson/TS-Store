import React, { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)

  const btnBgClassName = details ? 'bg-yellow-300' : 'bg-blue-300'
  const btnClasses = ['py-2 px-4 border my-2', btnBgClassName]
  return (
    <div className="flex flex-col border py-2 px-4 rounded items-center mb-2 w-[250px]">
      <img src={product.images[0]} className="h-[100px]" alt={product.title} />
      <p className='mt-2'>{product.title}</p>
      <p className="font-bold">${product.price}</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? 'Hide Details' : 'Show Details'}
      </button>

      {details && (
        <div className='flex flex-col items-center'>
          <p className='text-center'>{product.description}</p>
          <p className='my-1'>
            Rate: <span className='font-bold'>{product?.rating}</span>
          </p>
          <p>
            In stock: <span>{product?.stock}</span>
          </p>
        </div>
      )}
    </div>
  )
}
