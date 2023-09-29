import React, { useState } from 'react'
import Turkey from '../../assets/svg/flags/Turkey.svg'
const Index = () => {
  const [flagStatus, setFlagStatus] = useState(true)
  const [countryFlag, setCountryFlag] = useState('Türkiye')
  return (
    <div className='w-full h-[183px] bg-[#fff] pt-6 flex items-center justify-center'>
      <div className='w-[90%] h-full border-[1px] border-[#E8E9EB] rounded-md flag-section'>
        <div className='w-full py-3 px-5 border-b-[1px] border-[#E8E9EB] flex items-center'>
          <span className='text-sm font-semibold'>Seçili Ülke :</span>
          <span className={flagStatus ? `text-sm text-[#F4113D] mx-2 font-semibold` : `text-sm text-[#959697] mx-2`}>
            {countryFlag == null ? 'Yok' : countryFlag}
          </span>
        </div>
        <div className='w-full'>
          <div className='w-full flex'>
            <div className='flex-1 px-3 py-3'>
              <img className='w-full' src={Turkey} />
            </div>
            <div className='flex-1 px-3 py-3'>
              <img className='w-full' src={Turkey} />
            </div>
            <div className='flex-1 px-3 py-3'>
              <img className='w-full' src={Turkey} />
            </div>
            <div className='flex-1 px-3 py-3'>
              <img className='w-full' src={Turkey} />
            </div>
            <div className='flex-1 px-3 py-3'>
              <img className='w-full' src={Turkey} />
            </div>
            <div className='flex-1 px-3 py-3'>
              <img className='w-full' src={Turkey} />
            </div>
          </div>
          <div></div>
        </div>
        <div className='w-full'>
          <div className='w-full flex'>
            <div className='flex-1 px-3 py-3'>
              <img className='w-full' src={Turkey} />
            </div>
            <div className='flex-1 px-3 py-3'>
              <img className='w-full' src={Turkey} />
            </div>
            <div className='flex-1 px-3 py-3'>
              <img className='w-full' src={Turkey} />
            </div>
            <div className='flex-1 px-3 py-3'>
              <img className='w-full' src={Turkey} />
            </div>
            <div className='flex-1 px-3 py-3'>
              <img className='w-full' src={Turkey} />
            </div>
            <div className='flex-1 px-3 py-3'>
              <img className='w-full' src={Turkey} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Index
