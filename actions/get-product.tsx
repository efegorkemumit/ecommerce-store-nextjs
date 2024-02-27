import {  Product } from '@/type'
import React from 'react'

const URLs = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct = async(id:string): Promise<Product> => {

    const res = await fetch(`${URLs}/${id}`);

    return res.json();


  
}

export default getProduct