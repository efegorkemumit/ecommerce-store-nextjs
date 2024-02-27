import { Image } from '@/type'
import { Tab } from '@headlessui/react'
import React from 'react'
import NextImage from 'next/image'
import { cn } from '@/lib/utils';

interface GallerTabProps{
    image : Image;
}

const GallerTab = ({image}:GallerTabProps) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center 
    justify-center rounded-md bg-white">
        {({selected})=>(

            <div>
                <span className='absolute h-full w-full inset-0 aspect-square overflow-hidden'>

                    <NextImage src={image.url} fill
                    alt='' className='object-cover object-center'>



                    </NextImage>



                </span>

                <span 
                className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2",
                selected?  'ring-black' : 'ring-transparent')}>


                </span>
            </div>



        )}



    </Tab>
  )
}

export default GallerTab