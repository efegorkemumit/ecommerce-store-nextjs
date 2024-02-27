import {  Size } from '@/type'
import React from 'react'

const URLs = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async(): Promise<Size[]> => {

    const res = await fetch(URLs);

    return res.json();


  
}

export default getSizes