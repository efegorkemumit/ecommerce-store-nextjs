import {  Color } from '@/type'
import React from 'react'

const URLs = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async(): Promise<Color[]> => {

    const res = await fetch(URLs);

    return res.json();


  
}

export default getColors