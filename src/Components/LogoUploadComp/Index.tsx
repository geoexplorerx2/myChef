import React, { FC } from 'react'
import LeftSignSymbol from '../../assets/svg/leftSignSymbol.svg'
interface IndexProps{
  LogoName?:string,
} 
const Index:FC<IndexProps> = ({LogoName}) => {
  return (
    <div className='w-full px-7 bg-white logo-section-shadow'>
      <div className='w-full flex items-center pt-8'>
        <div className='w-[20%] flex items-center justify-start translate-y-[1px]'><img src={LeftSignSymbol}/></div>
        <div className='text-2xl font-semibold'>{LogoName}</div>
      </div>
      <div className='w-full flex justify-center py-3 mb-5'>
         <span className='text-sm text-[rgba(0,0,0,0.5)]'>Opsiyonel</span>
      </div>
    </div>
  )
}

export default Index
