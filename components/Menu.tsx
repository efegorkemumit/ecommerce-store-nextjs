'use client'

import { cn } from '@/lib/utils';
import { Category } from '@/type'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


interface MenuProps{
    data: Category[];
}

const Menu = ({data}: MenuProps) => {

    const pathname = usePathname();
    const routes = data.map((route)=>({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname ===`/category/${route.id}`

    }))
  return (
   <nav className=' mx-6 flex items-center space-x-4 '>
    {routes.map((route)=>(

       <Link  key={route.href} href={route.href}
        className={cn('text-sm font-medium hover:text-slate-700',
        route.active ? "text-red-800": 'text-black')}>
        {route.label}
       </Link>
    ))}
    </nav>
  )
}

export default Menu