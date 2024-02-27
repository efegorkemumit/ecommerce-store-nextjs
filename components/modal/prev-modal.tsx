import React from 'react'
import Modal from './modal'
import usePreviewModal from '@/hooks/use-prev-modals'

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

    asdasd


   </Modal>
  )
}

export default PrevModal