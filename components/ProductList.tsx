import { Product } from '@/type';
import React from 'react'
import NoResults from './NoResults';
import ProductCart from './ProductCart';

interface ProductListProps{
    title:string;
    items: Product[]
}

const ProductList = ({items, title}:ProductListProps) => {
  return (
    <div className=' space-x-2 space-y-4'>
        <h3>{title}</h3>
        {items.length === 0 && <NoResults/>}

        <div className=''>
            {items.map((item)=>(
               <ProductCart data={item}></ProductCart>
            ))}



        </div>




    </div>
  )
}

export default ProductList