import React from 'react'

interface ContainerProps{
    children : React.ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className='mx-auto max-w-6xl'>{children}</div>
  )
}

export default Container