import React from 'react'

const Index = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-[90%] my-5 bg-[#5577A8] rounded-md'>
        <div className='w-full flex justify-center pt-4 text-white text-sm'>Adet Sayısı</div>
        <div className='w-full flex justify-center pt-4 text-sm text-[rgba(255,255,255,0.5)]'>Maksimum sipariş 4 adettir.</div>
        <div className='w-full flex justify-center px-10 mt-5 mb-8'>
            <div className='w-full h-[45px] flex rounded-md'>
                <div className='w-[20%] flex justify-center items-center border-none h-full bg-[#EDEDED] rounded-l-md'><span className='text-[30px] font-bold'>-</span></div>
                <div className='w-[60%] flex justify-center items-center border-none h-full bg-[#ffffff]'>3</div>
                <div className='w-[20%] flex justify-center items-center border-none h-full bg-[#EDEDED] rounded-r-md'><span className='text-[30px] font-bold'>+</span></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Index
