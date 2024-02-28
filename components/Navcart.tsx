'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import useCart from '@/hooks/use-cart';

const Navcart = () => {

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
    <div className='ml-auto items-center gap-2'>
        <Button onClick={()=>router.push('/cart')}>
            <ShoppingBag size={20}></ShoppingBag>

            <span className='ml-2'>
                {cart.items.length}
            </span>
        </Button>
        
        
        
    </div>
  )
}

export default Navcart