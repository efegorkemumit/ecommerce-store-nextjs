'use client'

import Container from '@/components/Container';
import useCart from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CartItem from './components/cartItem';
import Summary from './components/summary';

const page = () => {

    const cart = useCart();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    const router = useRouter();
  
    if (!isMounted) {
      return null;
    }


  return (
   <Container>
    <div className='py-16'>
        <h1 className='text-3xl'> Shooping cart</h1>

        <div className='mt-12 lg:grid-cols-12 flex gap-8'>
            <div className='  lg:col-span-7'>

                {cart.items.map((item)=>(
                   <CartItem key={item.id} data={item}></CartItem>
                ))}



            </div>

            <div className='lg:col-span-5 bg-yellow-300 '>

                <Summary/>



            </div>




        </div>



    </div>



   </Container>
  )
}

export default page