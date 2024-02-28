'use client'

import Container from '@/components/Container';
import useCart from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

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

        <div className='mt-12 lg:grid-cols-12'>
            <div className='lg:col-span-7'>

                {cart.items.map((item)=>(
                    <div>a</div>
                ))}



            </div>




        </div>



    </div>



   </Container>
  )
}

export default page