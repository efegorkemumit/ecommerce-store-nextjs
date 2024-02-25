import { Category } from '@/type'
import React from 'react'

const URLs = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async(): Promise<Category[]> => {

    const res = await fetch(URLs);

    return res.json();


  
}

export default getCategories