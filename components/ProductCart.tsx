'use client'

import { Product } from '@/type'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { MouseEventHandler } from 'react'
import IconButton from './IconButton'
import { Expand, ShoppingCartIcon } from 'lucide-react'
import CurrencyTL from './currency'
import usePreviewModal from '@/hooks/use-prev-modals'
import useCart from '@/hooks/use-cart'

interface ProductCartProps{
    data: Product
}

const ProductCart = ({data}:ProductCartProps) => {

    const router = useRouter();
    const previewModal = usePreviewModal();

    const handleClick = ()=>{

        router.push(`/product/${data?.id}`)

    }

    const cart = useCart();



    const onAddCart: MouseEventHandler<HTMLButtonElement>=(event)=>{
        event.stopPropagation();
        cart.addItem(data)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement>=(event)=>{
        event.stopPropagation();
        previewModal.onOpen(data);
    }
  return (
    <div onClick={handleClick} className='group cursor-pointer
     bg-white rounded-xl border p-3 space-y-4'>

        <div className='aspect-square rounded-xl bg-gray-200 relative'>
            <Image src={data.images?.[0]?.url}
            alt=''
            fill
            className='rounded-lg bg-cover'>


            </Image>

            <div className='absolute w-full px-6 bottom-5 opacity-0
            group-hover:opacity-100'>

                <div className='flex gap-x-6 justify-center'>

                    <IconButton 
                    onClick={onPreview}
                    icon={<Expand size={20} 
                    className='text-gray-800'/>}>


                    </IconButton>

                    <IconButton onClick={onAddCart}
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