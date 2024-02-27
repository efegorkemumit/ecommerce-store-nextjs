'use client'

import { Product } from '@/type'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import IconButton from './IconButton'
import { Expand, ShoppingCartIcon } from 'lucide-react'
import CurrencyTL from './currency'

interface ProductCartProps{
    data: Product
}

const ProductCart = ({data}:ProductCartProps) => {

    const router = useRouter();

    const handleClick = ()=>{

        router.push(`/product/${data?.id}`)

    }
  return (
    <div onClick={handleClick} className='cursor-pointer
     bg-white rounded-xl border p-3 space-y-4'>

        <div className='aspect-square rounded-xl bg-gray-200 relative'>
            <Image src={data.images?.[0]?.url}
            alt=''
            fill
            className='rounded-lg bg-cover'>


            </Image>

            <div className='absolute w-full px-6 bottom-5 opacity-0
            hover:opacity-100'>

                <div className='flex gap-x-6 justify-center'>

                    <IconButton
                    icon={<Expand size={20} 
                    className='text-gray-800'/>}>


                    </IconButton>

                    <IconButton
                    icon={<ShoppingCartIcon size={20} 
                    className='text-gray-800'/>}>


                    </IconButton>


                </div>
            </div>



        </div>
        
        <div>
            <p className='font-semibold text-lg'>{data.name}</p>
            <p className='text-sm text-gray-500'>{data.category?.name}</p>
        </div>

        <div>
            <CurrencyTL value={data?.price} />
        </div>
        
    </div>
  )
}

export default ProductCart