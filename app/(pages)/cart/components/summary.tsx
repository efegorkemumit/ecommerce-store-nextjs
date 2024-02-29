'use client'

import CurrencyTL from '@/components/currency'
import { Button } from '@/components/ui/button'
import useCart from '@/hooks/use-cart'
import axios from 'axios'
import React from 'react'

const Summary = () => {


    const items = useCart((state)=>state.items)


    const totalPrice = items.reduce((total, item) =>{
        return total  + Number(item.price)
    }, 0)

    const onCheckout = async()=>{

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        productIds: items.map((item)=>item.id)
      }) ;

      window.location = response.data.url

        
    }
  return (
    <div>

        <CurrencyTL value={totalPrice}></CurrencyTL>

        <Button onClick={onCheckout} disabled={items.length === 0} className='w-full'>
            checout
        </Button>

      
    </div>
  )
}

export default Summary