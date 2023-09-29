import React from 'react';
import remove from '../../assets/svg/delete.svg'
import whiteTick from '../../assets/svg/whiteCheck.svg'

const Uploaded = () => {
  return (
    <div className='w-full h-[140px] flex justify-center mb-8'>
      <div className='w-[90%] h-full border-[1px] border-[#586E8E86] rounded-md bg-[#F7F3EF]'>
        <div className='w-full flex justify-center items-center h-[60px]'>
          <div className='w-[30px] h-[30px] rounded-full bg-[#5577A8] flex justify-center items-center'><img className='w-[50%]' src={whiteTick} /></div>
          <div className='text-[#5577A8] text-sm mx-3'>Logo Yüklendi</div>
        </div>
        <div className='w-full h-[40px] flex'>
          <div className='w-[70%] flex justify-end text-sm text-black items-center font-semibold'><span className='mx-3'>dental-crown.png</span></div>
          <div className='w-[30%] flex justify-end items-center'><img className='w-[20%] mx-6' src={remove}/></div>
        </div>
        <div className='w-full flex justify-center items-center'>
           <span className='text-sm text-[rgba(0,0,0,0.52)]'>{`${'(2 MB)'}`}</span>
        </div>
      </div>
    </div>
  )
}

export default Uploaded
