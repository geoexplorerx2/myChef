import React from 'react'
import Turkey from '../../assets/svg/flags/Turkey.svg'
const Index = () => {
  return (
    <div className='w-full'>
      <div className='text-sm font-bold mb-1 mt-1 px-6'>Nakış İşlem Özeti</div>
      <div className='w-full flex justify-center px-6 mt-5'>
        <div className='w-full rounded-md border-[1px] bg-white border-[#E8E9EB]'>
          <div className='w-[90%] flex justify-between items-center  mt-[22px]'>
            <span className='text-sm text-[rgba(0,0,0,0.5)] px-5'>Birinci İsim</span>
            <span className='text-sm text-black font-bold'>Chef</span>
          </div>
          <div className='w-[90%] flex justify-between items-center  mt-[22px]'>
            <span className='text-sm text-[rgba(0,0,0,0.5)] px-5'>İkinci İsim</span>
            <span className='text-sm text-black font-bold'>Ahmet Canik</span>
          </div>
          <div className='w-[90%] flex justify-between items-center mt-[22px]'>
            <span className='text-sm text-[rgba(0,0,0,0.5)] px-5'>Üçüncü İsim</span>
            <span className='text-sm text-black font-bold'>-</span>
          </div>
          <div className='w-[90%] flex justify-between items-center  mt-[22px]'>
            <span className='text-sm text-[rgba(0,0,0,0.5)] px-5'>Logo/Marka</span>
            <span className='text-sm text-black font-bold'>dental-crown.png</span>
          </div>
          <div className='w-[90%] flex justify-between items-center  mt-[22px] mb-[22px]'>
            <span className='text-sm w-[60%] text-[rgba(0,0,0,0.5)] px-5'>Bayrak</span>
            <span className='text-sm  w-[40%] text-black font-bold flex items-center'>
              <img className='w-[20%]' src={Turkey} />
              <span className='mx-2'>Türkiye</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
