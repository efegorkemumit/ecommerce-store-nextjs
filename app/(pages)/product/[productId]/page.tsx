import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import ProductList from '@/components/ProductList'
import Gallery from '@/components/gallery/gallery'
import Info from '@/components/gallery/info'
import React from 'react'

interface ProductPageProps{
  params: {
    productId: string
  }
}

const ProductId = async({params}:ProductPageProps) => {

  const product = await getProduct(params.productId);

  const RecentProduct = await getProducts({
    categoryId:product?.category.id
  })

  if(!product){
    return null;
  }
  return (
    <div className='bg-white'>
      <div className='px-4 py-10 '>
        <div className='grid grid-cols-1  lg:gap-x-9 lg:grid-cols-2'>
          <Gallery images={product.images}></Gallery>
          <div>
            <Info data={product}></Info>


          </div>


     



        </div>

        <hr className='my-10'></hr>

<ProductList title='Recent item' items={RecentProduct}></ProductList>



      </div>


    </div>
  )
}

export default ProductId