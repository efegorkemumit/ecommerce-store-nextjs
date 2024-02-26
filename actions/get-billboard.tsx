import { Billboard } from '@/type'
import React from 'react'

const URLs = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async(id : string): Promise<Billboard> => {

    const res = await fetch(`${URLs}/${id}`);

    return res.json();


  
}

export default getBillboard