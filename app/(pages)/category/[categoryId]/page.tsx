import getCategory from '@/actions/get-category';
import getColors from '@/actions/get-colors';
import getSizes from '@/actions/get-sizes';
import Billboard from '@/components/Billboard';
import Container from '@/components/Container';
import React from 'react'
import Filter from './components/filter';
import getProducts from '@/actions/get-products';
import NoResults from '@/components/NoResults';
import ProductCart from '@/components/ProductCart';

interface CategoryIdProps{
  params:{
    categoryId: string;
  },
  searchParams:{
    colorId: string;
    sizeId:string;
  }
}

const CategoryId = async({params, searchParams}:CategoryIdProps) => {

  const products = await getProducts({
    categoryId:params.categoryId,
    colorId:searchParams.colorId,
    sizeId:searchParams.sizeId
  })

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId)

  return (
   <Container>
    <Billboard data={category.billboard} />

    <div className=' px-4 pb-24'>
      <div className='lg:grid lg:grid-cols-5 lg:gap-4'>

            <div>
            <Filter valueKey='sizeId' data={sizes} name='Sizes'></Filter>
                <Filter valueKey='colorId' data={colors} name='Colors'></Filter>

            </div>

            


              <div className='mt-6 lg:col-span-4'>
                {products.length === 0 && <NoResults/>}

                <div className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 lg:grid-cols-4'>

                  {products.map((item)=>(
                    <ProductCart key={item.id} data={item}></ProductCart>
                  ))}


                </div>



              </div>




    </div>

    </div>

   


 



   </Container>
  )
}

export default CategoryId