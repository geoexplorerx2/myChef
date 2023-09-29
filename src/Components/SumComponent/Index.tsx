import React from 'react'

const Index = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-[90%] rounded-md bg-[#E8E9EB] mt-[22px]'>
        <div className='w-full flex justify-between items-center py-[14px]'>
          <span className='text-sm text-[rgba(0,0,0,0.5)] px-6 font-bold'>Taban Fiyat</span>
          <span className='text-sm text-[rgba(0,0,0,0.5)] px-6 font-bold'>550,00₺</span>
        </div>
        <div className='w-full flex justify-between items-center py-[14px]'>
          <span className='text-sm text-[rgba(0,0,0,0.5)] px-6 font-bold'>Nakış İşlemleri</span>
          <span className='text-sm text-[rgba(0,0,0,0.5)] px-6 font-bold'>100,00₺</span>
        </div>
        <div className='w-full flex justify-center'>
          <div className='w-[88%] h-[1px] bg-[rgba(0,0,0,0.7)]'></div>
        </div>
        <div className='w-full flex justify-between items-center py-[14px]'>
          <span className='text-sm text-[rgba(0,0,0,1)] px-6 font-bold'>Nakış İşlemleri</span>
          <span className='text-sm text-[rgba(0,0,0,1)] px-6 font-bold'>650,00₺</span>
        </div>
      </div>
    </div>
  )
}

export default Index
