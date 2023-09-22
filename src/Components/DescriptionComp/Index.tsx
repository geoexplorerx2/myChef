import React from 'react'

const Index = () => {
  return (
    <div className='w-full'>
      <div className='w-full px-7 text-sm font-semibold'>Açıklama</div>
      <div className='w-full h-[120px] px-7 pt-5 mb-5'>
        <textarea className='w-full h-full bg-[#E8E9EB] rounded-md placeholder:px-5 placeholder:py-3' placeholder='Açıklama (Opsiyonel)'>

        </textarea>
      </div>
    </div>
  )
}

export default Index
