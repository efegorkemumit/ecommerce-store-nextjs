import IconButton from '@/components/IconButton';
import CurrencyTL from '@/components/currency';
import useCart from '@/hooks/use-cart';
import { Product } from '@/type'
import { X } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

interface CartItemProps{
    data: Product;
}

const CartItem = ({data}:CartItemProps) => {

    const cart = useCart();

    const onRemove = () =>{
        cart.removeItem(data.id)
    }
  return (
  <li className='flex border-b'>
    <div className='relative h-24 w-24 rounded-md overflow-hidden'>

        <Image  fill src={data.images[0].url} alt='' className='object-cover'>

        </Image>
    </div>

    <div className='flex relative gap-5'>

        <IconButton onClick={onRemove} icon={<X size={15}></X>}></IconButton>

        <div className='flex relative gap-24'>

            <p>{data.name}</p>
            <p>{data.color.name}</p>
            <p>{data.size.name}</p>
           <CurrencyTL value={data.price}></CurrencyTL>
        </div>




    </div>



  </li>
  )
}

export default CartItem