import { Billboard } from '@/type'
import React from 'react'

interface BillboardProps{
    data : Billboard;
}

const Billboard = ({data}: BillboardProps) => {
  return (
    <div className='p-4 rounded-xl overflow-hidden'>
        <div style={{backgroundImage: `url(${data?.imageUrl})`}}
        className='rounded-xl relative aspect-square md:aspect-[2.4/1]
        overflow-hidden bg-cover'
        >
            <div className='h-full w-full flex flex-col justify-center
            items-center text-center gap-3'>
                <div className='font-bold text-3xl md:text-4xl lg:text-5xl'>
{data?.label}

                </div>



            </div>



        </div>


    </div>
  )
}

export default Billboard