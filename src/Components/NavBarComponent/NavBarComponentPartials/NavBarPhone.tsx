import React from 'react'
import Menu from '../../../assets/svg/menu.svg'
import Basket from '../../../assets/svg/basket.svg'
import Logo from '../../../assets/png/logo.png'
import Counter from '../../../assets/svg/counter.svg'
const NavBarPhone = () => {
  return (
    <div className='w-full h-[75px] bg-white flex items-center'>
      <div className='w-[20%] px-5 flex items-center'>
        <img className='w-[60%]' src={Menu} />
      </div>
      <div className='w-[60%] pl-5'>
        <div className='w-full'>
          <img className='w-full flex items-center justify-center' src={Logo} />
        </div>
      </div>
      <div className='w-[30%] px-5 '>
        <div className='relative w-full h-full flex items-center justify-end'>
          <img src={Basket} />
          <div className='rounded-full w-[15px] h-[15px] absolute top-[-5px] right-0 bg-slate-800 text-[#fff] flex items-center justify-center'>
            <span className='text-xs'>4</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBarPhone
