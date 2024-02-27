import {  Billboard, Category } from '@/type'
import React from 'react'

const URLs = `${process.env.NEXT_PUBLIC_API_URL}/categories`
const BillboardURLs = `${process.env.NEXT_PUBLIC_API_URL}/billboards`


const getCategory = async(id : string): Promise<Category> => {

    const categoryRes = await fetch(`${URLs}/${id}`);
    const categoryData: Category = await categoryRes.json();

    const billboardRes = await fetch(`${BillboardURLs}/${categoryData.billboardId}`);
    const billboardData: Billboard = await billboardRes.json();

    categoryData.billboard = billboardData;
    return categoryData




  
}

export default getCategory