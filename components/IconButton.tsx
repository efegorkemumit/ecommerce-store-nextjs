import { cn } from '@/lib/utils';
import React, { MouseEventHandler } from 'react'

interface IconButtonProps{
    onClick ? : MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    classname?:string

}

const IconButton = ({icon, classname,onClick}:IconButtonProps) => {
  return (
   
    <button
    onClick={onClick}
    className={cn(
        "rounded-full flex items-center justify-center border bg-white p-2 hover:scale-110 shadow-xl",
        classname
    )}>
{icon}


    </button>
  )
}

export default IconButton