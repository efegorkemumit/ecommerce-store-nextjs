
'use client'
import React, { useEffect, useState } from 'react'


const formatter = new Intl.NumberFormat('tr-TR',{
    style: 'currency',
    currency: 'TRY'
})

interface currencyProps{
    value?:string | number
}

const CurrencyTL = ({value}:currencyProps) => {

    const [isMoutend , setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMoutend){
        return null;
    }
  return (
    <div>
        {formatter.format(Number(value))}
    </div>
  )
}

export default CurrencyTL