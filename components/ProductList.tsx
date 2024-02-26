import { Product } from '@/type';
import React from 'react'

interface ProductListProps{
    title:string;
    items: Product[]
}

const ProductList = ({items, title}:ProductListProps) => {
  return (
    <div className=' space-x-2 space-y-4'>
        <h3>{title}</h3>
        {items.length === 0 && <div>No reults</div>}

        <div className=''>
            {items.map((item)=>(
                <div>{item.name}</div>
            ))}



        </div>




    </div>
  )
}

export default ProductList