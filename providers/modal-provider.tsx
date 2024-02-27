'use client'
import PrevModal from '@/components/modal/prev-modal';
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {

    const [isMoutend, setIsMounted]= useState(false);

    useEffect(()=>{
        setIsMounted(true)
    })

    if(!isMoutend){
        return null;
    }
  return (
    <>
    <PrevModal/>
    </>
  )
}

export default ModalProvider