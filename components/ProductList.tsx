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

        <div className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 lg:grid-cols-4'>
            {items.map((item)=>(
               <ProductCart key={item.id} data={item}></ProductCart>
            ))}



        </div>




    </div>
  )
}

export default ProductList