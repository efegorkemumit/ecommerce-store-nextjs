import { Product } from '@/type'
import React from 'react'

interface ProductCartProps{
    data: Product
}

const ProductCart = ({data}:ProductCartProps) => {
  return (
    <div>ProductCart</div>
  )
}

export default ProductCart