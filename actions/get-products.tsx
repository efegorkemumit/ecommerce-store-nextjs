import { Category, Product } from '@/type'
import React from 'react'
import queryString from 'query-string';

const URLs = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
    categoryId?:string;
    colorId?: string;
    sizeId?:string;
    isFeatured?:boolean
}

const getProducts = async(query: Query): Promise<Product[]> => {

    const url = queryString.stringifyUrl({
        url:URLs,
        query:{
            colorId: query.colorId,
            sizeId:query.sizeId,
            categoryId:query.categoryId,
            isFeatured:query.isFeatured
        }
    })

    const res = await fetch(URLs);

    return res.json();


  
}

export default getProducts