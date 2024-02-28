'use client'

import { Product } from '@/type'
import React from 'react'
import CurrencyTL from '../currency'
import { Button } from '../ui/button'
import { ShoppingBasket } from 'lucide-react'
import useCart from '@/hooks/use-cart'
interface InfoProps{
    data:Product
}

const Info = ({data}:InfoProps) => {

    const cart = useCart();

    const onAddCart = ()=>{
        cart.addItem(data)
    }
  return (
    <div>
        <h1 className='text-3xl font-bold'>{data.name}</h1>
        <div>
            <p className='text-2xl text-red-600'>
                <CurrencyTL value={data?.price}></CurrencyTL>
            </p>
        </div>
        <hr className='my-4'></hr>

        <div className='flex flex-col gap-3'>
            <div className='flex items-center'>
                <h3 className='font-bold'>Size :</h3>
                <div>
                    {data?.size?.value}
                </div>

            </div>

            <div className='flex items-center'>
                <h3 className='font-bold'>Color :</h3>
                <div className='h-6 w-6 rounded-full border-gray-600'
                style={{backgroundColor :data?.color?.value }}>
                </div>

            </div>

            <div className='mt-10 flex items-center gap-2'>
                <Button onClick={onAddCart}  variant="destructive">
                    <ShoppingBasket size={20} className='mr-2' />    Add to cart
              
                
                </Button>



            </div>


        </div>


    </div>
  )
}

export default Info