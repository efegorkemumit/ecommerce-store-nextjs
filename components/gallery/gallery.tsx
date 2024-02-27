'use client'

import React from 'react'
import { Tab } from '@headlessui/react'
import { Image } from '@/type';
import GallerTab from './galleryTab';
import NextImage from 'next/image'

interface GalleryProps{
    images : Image[];
}

const Gallery = ({images}:GalleryProps) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
        <div className='mx-auto mt-6 hidden sm:block w-full lg:max-w-none max-w-2xl'>
    <Tab.List className="grid grid-cols-4 gap-4">
        {images.map((image)=>(
            <GallerTab key={image.id} image={image}/>


        ))}
    </Tab.List>
    </div>
    <Tab.Panels className="aspect-square w-full">
        {images.map((image)=>(
         <Tab.Panel key={image.id}>

            <div className='aspect-square relative h-full w-full overflow-hidden'>
            <NextImage src={image.url} fill
                    alt='' className='object-cover object-center'>



                    </NextImage>


            </div>


         </Tab.Panel>

        ))}
     
    </Tab.Panels>
  </Tab.Group>
  )
}

export default Gallery