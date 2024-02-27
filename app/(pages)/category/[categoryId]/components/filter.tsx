'use client'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Color, Size } from '@/type'
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import React from 'react'

interface FilterProps{
    data: (Size | Color)[];
    name:string;
    valueKey:string
}

const Filter = ({data, valueKey, name}:FilterProps) => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey)

    const onClick = (id:string)=>{
        const current = queryString.parse(searchParams.toString());

        const query= {
            ...current,
            [valueKey]: id
        }

        if(current[valueKey]===id){
            query[valueKey] = null
        }

        const url = queryString.stringifyUrl({
            url:window.location.href,
            query
        }, {skipNull : true});

        router.push(url);
    }
  return (
    <div className='mb-8'>
        <h3>
            {name}
        </h3>

        <hr className='my-4'></hr>
        <div className='flex flex-wrap'>
            {data.map((filter)=>(

                <div key={filter.id}>
                    <Button variant="link" onClick={() => onClick(filter.id)} className={cn(
                        "",
                        selectedValue === filter.id && "bg-red-600 text-white"
                        
                    )
                    }
                    >
                        {filter.name}



                    </Button>


                    </div>

             



            ))}


        </div>




    </div>
  )
}

export default Filter