import React from 'react'
import Modal from './modal'
import usePreviewModal from '@/hooks/use-prev-modals'
import Gallery from '../gallery/gallery';
import Info from '../gallery/info';

const PrevModal = () => {
    const previewModal = usePreviewModal();
    const product = usePreviewModal((state)=>state.data)

    if(!product)
    {
        return null
    }
  return (
   <Modal open={previewModal.isOpen}
   onClose={previewModal.onClose}>

    <div>
    <Gallery images={product.images} />
    </div>

    <div className='col-span-6 mt-6'>

      <Info data={product}/>
    </div>

     


   </Modal>
  )
}

export default PrevModal