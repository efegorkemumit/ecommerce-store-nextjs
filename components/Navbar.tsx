import React from 'react'
import Container from './Container'
import Link from 'next/link'
import getCategories from '@/actions/get-categories'
import Menu from './Menu'
import Navcart from './Navcart'

const Navbar = async() => {

    const categories = await getCategories();

  return (
    <div className='border-b'>

        <Container>

            <div className='relative  flex px-4 py-2 h-16 items-center'>
                <Link href="/" className=' ml-4 flex gap-2'>
                    <p className='font-semibold text-3xl'>Store</p>
                </Link>

                <Menu data={categories}></Menu>
                <Navcart/>


            </div>

        


        </Container>
        
        
       
        
    </div>
  )
}

export default Navbar