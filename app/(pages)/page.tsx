import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/Billboard'
import Container from '@/components/Container'
import ProductList from '@/components/ProductList'
import React from 'react'

const Home = async() => {
  const billboard = await getBillboard("381a9526-4cd8-46b1-8f2e-78f3cf0b94b4")
  const products = await getProducts({isFeatured:true})

  return (
    <Container>
      <div className='pb-10'>

        <Billboard data={billboard}/>



      </div>

      <div className='flex flex-col gap-3 px-4 '>

        <ProductList title='Featured Products' items={products}></ProductList>


      </div>





    </Container>
  )
}

export default Home