import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
      <span className="font-bold">Store</span>

      <span>
        <Link to="/TS-Store" className="mr-2">Products</Link>
        <Link to="/TS-Store/about">About</Link>
      </span>
    </nav>
  )
}